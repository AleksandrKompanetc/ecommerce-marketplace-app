export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
} 