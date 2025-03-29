import { Product } from '@/types/product';
import ProductCard from './(components)/ProductCard';

// В реальном приложении данные будут загружаться с API
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Sample Product',
    description: 'This is a sample product description',
    price: 99.99,
    image: '/sample-product.jpg',
    category: 'Electronics',
    seller: {
      id: '1',
      name: 'Sample Seller',
      rating: 4.5
    }
  },
  // Добавьте больше продуктов...
];

export default function Home() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 