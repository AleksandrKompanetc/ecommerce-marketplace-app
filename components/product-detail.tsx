"use client"

import Stripe from "stripe"
import Image from "next/image"
import { Button } from "./ui/button"
import { useCartStore } from "@/store/cart-store"

interface Props {
  product: Stripe.Product
}

export const ProductDetail = ({product}: Props) => {
  const {items, addItem, removeItem, clearCart} = useCartStore()
  const price = product.default_price as Stripe.Price
  const cartItem = items.find((item) => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    })
  }

  return (
    <div>
      {product.images && product.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
          />
        </div>
      )}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        {product.description && 
        <p className="text-gray-700 mb-4">{product.description}</p>}

        {price && price.unit_amount && (
          <p className="text-lg font-semibold text-gray-900">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}

        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => removeItem(product.id)}> -</Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={onAddItem}> +</Button>
        </div>
      </div>
    </div>
  )
}