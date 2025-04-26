import Link from "next/link"
import Stripe from "stripe"
import { Card } from "./ui/card"

interface Props {
  product: Stripe.Product
}

export const ProductCard = ({ product }: Props) => {
  return <Link href={"/products/1"}>
    <Card></Card>
  </Link>
}