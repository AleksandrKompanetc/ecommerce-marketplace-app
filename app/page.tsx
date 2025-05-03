import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5
  })

  return (
    <section className="py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <section>
        <div>
          <div>
            <h2>Welcome to My Ecommerce</h2>
            <p>Discover the latest products at the best prices.</p>
            <Button asChild variant="default">
              <Link href="/products">Browse All Products</Link>
            </Button>
          </div>
          <div className="relative w-[450px] h-[450px]">
            <Image
              alt="Banner Image"
              src={products.data[0].images[0]}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
      <section>
        <Carousel products={products.data} />
      </section>
    </section>
  );
}
