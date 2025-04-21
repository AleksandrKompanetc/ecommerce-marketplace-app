import Stripe from "stripe"
import { Card } from "./ui/card"
import { useState } from "react"

interface Props {
  products: Stripe.Product
}

export const Carousel = ({products}: Props) => {
  const [current, setCurrent] = useState<number>(0)

  return <Card></Card>
}