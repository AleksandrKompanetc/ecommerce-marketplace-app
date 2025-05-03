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
    <div className="container mx-auto px-4 text-blue-500">
      <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Welcome to My Ecommerce</h2>
          <p className="mb-6">Discover the latest products at the best prices.</p>
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
      </section>

      <section className="py-12">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
