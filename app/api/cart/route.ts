import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', user.id)
    .single();

  if (!userData) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const { data, error } = await supabase
    .from('cart_items')
    .select('*, products(*)')
    .eq('user_id', userData.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { product_id, quantity } = await request.json();

  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', user.id)
    .single();

  if (!userData) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const { data, error } = await supabase
    .from('cart_items')
    .insert({ user_id: userData.id, product_id, quantity })
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id, quantity } = await request.json();

  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', user.id)
    .single();

  if (!userData) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const { data, error } = await supabase
    .from('cart_items')
    .update({ quantity, updated_at: new Date() })
    .eq('id', id)
    .eq('user_id', userData.id)
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const { data: userData } = await supabase
    .from('users')
    .select('id')
    .eq('clerk_id', user.id)
    .single();

  if (!userData) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', id)
    .eq('user_id', userData.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
