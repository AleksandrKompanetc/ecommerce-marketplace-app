"use client"

import { useCartStore } from "@/store/cart-store"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { checkoutAction } from "./checkout-action"

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
              <li key={key} className="flex justify-between items-center py-2 border-b">
              <div>
                <span className="block font-medium">{item.name}</span>
                <span className="text-sm text-gray-600">${((item.price * item.quantity) / 100).toFixed(2)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={() => removeItem(item.id)}>-</Button>
                <span className="w-6 text-center">{item.quantity}</span>
                <Button onClick={() => addItem({ ...item, quantity: 1 })}>+</Button>
              </div>
            </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button type="submit" variant="default" className="w-full">
          Proceed to Payment
        </Button>
        {/* <Button onClick={() => clearCart()} variant="default" className="w-full">
          Clear Cart
        </Button> */}
      </form>
    </div>
  )
}