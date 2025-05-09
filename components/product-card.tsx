import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-none">
      <Link href={`/products/${product.id}`} className="block h-full">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          {product.description && (
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          )}
          {price?.unit_amount && (
            <p className="text-xl text-black font-semibold">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="mt-4 w-full bg-black text-white">
            View Details
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
};