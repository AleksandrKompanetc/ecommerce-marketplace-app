import Stripe from "stripe"

interface Props {
  product: Stripe.Product
}

export const ProductCard = ({product}: Props) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search products..." />
      </div>

      <ul>
        {products.map((product) => {
          return <li></li>
        })}
      </ul>
    </div>
  )
}