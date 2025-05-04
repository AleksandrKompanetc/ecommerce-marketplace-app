import { stripe} from "@/lib/stripe"
import { ProductList } from "@/components/product-list"

export default async function ProductsPage() {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
      limit: 5,
    });

    return (
      <div className="pb-8">
        <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
          All Products
        </h1>
        <ProductList products={products.data} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <p className="text-red-500 text-center mt-10">Failed to load products. Please try again later.</p>;
  }
}