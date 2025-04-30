"use client"

import { useCartStore } from "@/store/cart-store"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {
  const { items } = useCartStore()
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (total === 0 || items.length === 0) {
    return (
      <div>
        <h1>Your Cart is empty!</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Checkout</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {items.map((items, key) => (
              <li key={key}>
                <div>
                  <span>{items.name}</span>
                  <span>${((items.price * items.quantity) / 100).toFixed(2)}</span>
                </div>
                <div>
                  <Button variant="outline" onClick={() => removeItem(product.id)}> -</Button>
                  <span className="text-lg font-semibold">{items.quantity}</span>
                  <Button onClick={onAddItem}> +</Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}