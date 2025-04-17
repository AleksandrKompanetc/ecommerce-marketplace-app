import Image from "next/image";
import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list()
  return (
    <div className="text-blue-500">
     
    </div>
  );
}
