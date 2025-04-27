import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const isNewArrival = searchParams.get('is_new_arrival') === 'true';
  const isSale = searchParams.get('is_sale') === 'true';

  let query = supabase.from('products').select('*');

  if (category) query = query.eq('category', category);
  if (subcategory) query = query.eq('subcategory', subcategory);
  if (isNewArrival) query = query.eq('is_new_arrival', true);
  if (isSale) query = query.eq('is_sale', true);

  const { data, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
