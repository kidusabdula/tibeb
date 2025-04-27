import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  // Fetch all categories
  const { data: categoriesData, error: categoriesError } = await supabase
    .from('products')
    .select('category');

  if (categoriesError) {
    return NextResponse.json({ error: categoriesError.message }, { status: 500 });
  }

  // Deduplicate categories manually
  const categoriesSet = new Set(categoriesData?.map((item: { category: string }) => item.category));
  const categories = Array.from(categoriesSet);

  // Fetch distinct subcategories for each unique category
  const subcategoriesPromises = categories.map(async (category) => {
    const { data: subcategoriesData, error: subcategoriesError } = await supabase
      .from('products')
      .select('subcategory')
      .eq('category', category)
      .not('subcategory', 'is', null);

    if (subcategoriesError) {
      console.error(`Error fetching subcategories for ${category}:`, subcategoriesError.message);
      return { category, subcategories: [] };
    }

    const subcategoriesSet = new Set(subcategoriesData?.map((s: { subcategory: string }) => s.subcategory));
    const subcategories = Array.from(subcategoriesSet);

    return { category, subcategories };
  });

  const categoriesWithSubcategories = await Promise.all(subcategoriesPromises);

  return NextResponse.json(categoriesWithSubcategories);
}
