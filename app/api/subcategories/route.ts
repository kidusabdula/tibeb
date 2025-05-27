// app/api/subcategories/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    console.log('API route called'); // Check your terminal logs
    
    const { data, error } = await supabase
      .from('products')
      .select('subcategory')
      .eq('category', 'Dresses')
      .order('subcategory', { ascending: true });
  
    console.log('Supabase data:', data); // Check terminal
    console.log('Supabase error:', error); // Check terminal
  
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  
    const uniqueSubcategories = [...new Set(data.map(item => item.subcategory))].filter(Boolean);
    
    console.log('Unique subcategories:', uniqueSubcategories); // Check terminal
    
    return NextResponse.json(uniqueSubcategories);
  }