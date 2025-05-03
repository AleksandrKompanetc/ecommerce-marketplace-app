"use client"

import Stripe from "stripe"
import { ProductCard } from "./product-card"
import { useState } from "react"
import { useMemo } from "react"

interface Props {
  products: Stripe.Product[]
}

export const ProductList = ({ products }: Props) => {

  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase()
    return products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(term)
      const descriptionMatch = product.description?.toLowerCase().includes(term)
      return nameMatch || descriptionMatch
    })
  }, [searchTerm, products])

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, key) => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}