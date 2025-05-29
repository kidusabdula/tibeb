import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const isNewArrival = searchParams.get('is_new_arrival');
  const isSale = searchParams.get('is_sale');
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : undefined;
  const order = searchParams.get('order');
  const ascending = searchParams.get('ascending') === 'true';

  if (!category) {
    return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 });
  }

  let query = supabase.from('products').select('*').eq('category', category);

  if (isNewArrival === 'true') query = query.eq('is_new_arrival', true);
  if (isSale === 'true') query = query.eq('is_sale', true);
  if (limit) query = query.limit(limit);
  if (order) query = query.order(order, { ascending });

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: data as Product[] }, { status: 200 });
}