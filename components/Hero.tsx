import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[1240px] w-full flex flex-col lg:flex-row justify-between mx-auto mb-20">
        <div className="m-8 lg:m-1">
          <p className="my-10 px-5 py-2  font-bold text-[#2118FF]">Sale 70%</p>
          <h1 className="scroll-m-20 text-5xl font-bold lg:text-6xl tracking-wide">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-8 mb-8 text-md">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="bg-black hover:bg-black text-white p-8">
            <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
          </Button>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-40">
            <Image src={"/Featured1.webp"} alt={"/"} width={120} height={120} />
            <Image src={"/Featured2.webp"} alt={"/"} width={120} height={120} />
            <Image src={"/Featured3.webp"} alt={"/"} width={120} height={120} />
            <Image src={"/Featured4.webp"} alt={"/"} width={120} height={120} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={"/header.webp"} alt="Header" width={1200} height={1200} />
        </div>
      </div>
    </section>
  );
}
