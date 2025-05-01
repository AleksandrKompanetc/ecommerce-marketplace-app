"use client"

import { useCartStore } from "@/store/cart-store"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {
  const { items, addItem, removeItem, clearCart } = useCartStore()
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
            {items.map((item, key) => (
              <li key={key}>
                <div>
                  <span>{item.name}</span>
                  <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
                </div>
                <div>
                  <Button variant="outline" onClick={() => removeItem(item.id)}> -</Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button onClick={() => addItem({ ...item, quantity: 1 })}> +</Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form>
        <Button type="submit" variant="default" className="w-full">
          Proceed to Payment
        </Button>
        <Button onClick={() => clearCart()} variant="default" className="w-full">
          Clear Cart
        </Button>
      </form>
    </div>
  )
}