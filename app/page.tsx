import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5
  })

  return (
    <div className="container mx-auto px-4 text-blue-500">
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Welcome to My Ecommerce
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the latest products at the best prices.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button asChild variant="default" className="text-base px-6 py-3 rounded-xl">
              <Link href="/products">Browse All Products</Link>
            </Button>

            <Select>
              <SelectTrigger className="w-[200px] h-11 rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">🆕 New</SelectItem>
                <SelectItem value="popular">🔥 Popular</SelectItem>
                <SelectItem value="sale">💸 Sale</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            alt="Banner Image"
            src={products.data[0].images[0]}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-12">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
