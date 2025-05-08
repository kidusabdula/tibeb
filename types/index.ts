export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  design_type?: string;
  is_new_arrival: boolean;
  is_sale: boolean;
  sale_price?: number;
  stock: number;
  description?: string;
  created_at: string;
  updated_at: string;
};

export type CartItem = {
  id: string;
  user_id: string; // Added for Clerk user association
  product_id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  created_at: string; // Added for tracking
  updated_at: string; // Added for tracking
};

export type Review = {
  id?: string;
  user_id: string; // Added for Clerk user association
  quote: string;
  name: string;
  photo: string;
  category?: string;
  created_at: string; // Made required
};

export type Category = {
  name: string;
  subcategory?: string;
  image?: string;
};

export type Collection = {
  title: string;
  products: Product[];
};