export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  is_new_arrival: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
