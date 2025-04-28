import Stripe from "stripe"
import { ProductCard } from "./product-card"
import { useState } from "react"

interface Props {
  products: Stripe.Product[]
}

export const ProductList = ({ products }: Props) => {

  const [searchTerm, setSearch] = useState<string>("")

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase()
    const nameMatch = product.name.toLowerCase().includes(term)
  })

  return (
    <div>
      <div>
        <input type="text" placeholder="Search products..." />
      </div>

      <ul>
        {products.map((product, key) => {
          return (
            <li key={key}>
              <ProductCard product={product} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}