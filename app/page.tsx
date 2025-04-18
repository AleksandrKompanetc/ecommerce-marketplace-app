import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5
  })

  return (
    <div className="text-blue-500">
     <section>
      <div>
        <div>
          <h2>Welcome to My Ecommerce</h2>
          <p>Discover the latest products at the best prices.</p>
          <Button asChild variant = "default">
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
        <Image alt="Banner Image" width={450} height={450}></Image>
      </div>
     </section>
    </div>
  );
}
