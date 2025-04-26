import Link from "next/link"
import Stripe from "stripe"
import { Card } from "./ui/card"
import Image from "next/image"

interface Props {
  product: Stripe.Product
}

export const ProductCard = ({ product }: Props) => {
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
    </Card>
  </Link>
}