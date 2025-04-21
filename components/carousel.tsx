import Stripe from "stripe"
import { Card } from "./ui/card"
import { useEffect, useState } from "react"

interface Props {
  products: Stripe.Product[]
}

export const Carousel = ({products}: Props) => {
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, 3000)
  }, [products.length])

  return <Card></Card>
}