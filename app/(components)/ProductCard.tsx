import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
            {product.title}
          </h3>
          <p className="mt-1 text-gray-500 line-clamp-2">{product.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">{product.seller.rating}★</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 