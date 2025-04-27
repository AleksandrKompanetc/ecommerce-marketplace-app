import Link from "next/link"
import Stripe from "stripe"
import { Card } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface Props {
  product: Stripe.Product
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price
  return <Link href={"/products/1"}>
    <Card>
      {product.images && product.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            alt={product.name}
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-gray-800">
          {product.title}
        </CardTitle>
        <CardContent>
          {product.description && (
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          )}
          {price && price.unit_amount && (
            <p className="text-xl text-white"> ${(price.unit_amount / 100).toFixed(2)}</p>
          )}
          <Button className="mt-4 bg-black text-white">View Details</Button>
        </CardContent>
      </CardHeader>
    </Card>
  </Link>
}