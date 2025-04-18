import Image from "next/image";
import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5
  })

  console.log(products)
  return (
    <div className="text-blue-500">
     
    </div>
  );
}
