import { stripe } from "@/lib/stripe"
import { ProductDetail } from "@/components/product-detail"

export default async function ProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  try {
    const product = await stripe.products.retrieve(params.id, {
      expand: ["default_price"],
    })

    const plainProduct = JSON.parse(JSON.stringify(product))
    return <ProductDetail product={plainProduct} />
  } catch (error) {
    console.error("Error fetching product:", error)
    return <p className="text-center text-red-500 mt-10">Product not found or an error occurred.</p>
  }
}