import Stripe from "stripe"
import { ProductCard } from "./product-card"
import { useState } from "react"

interface Props {
  products: Stripe.Product[]
}

export const ProductList = ({ products }: Props) => {

  const [searchTerm, setSearch] = useState<string>("")
  
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