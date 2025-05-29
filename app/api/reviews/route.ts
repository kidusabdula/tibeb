import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : undefined;

  if (!category) {
    return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 });
  }

  let query = supabase.from('reviews').select('quote, name, photo').eq('category', category);

  if (limit) query = query.limit(limit);

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}