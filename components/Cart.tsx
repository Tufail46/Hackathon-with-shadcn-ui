import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
  return (
    <div className="max-w-[1240px] w-full mx-auto my-16">
      <div className="m-8 lg:m-1">
        <div className="grid lg:grid-cols-[2fr,1fr] justify-center gap-12">
          <div className="flex justify-center gap-4">
            <div className="">
              <Image src={"/321.png"} alt={"/"} width={100} height={200} />
            </div>
            <div className="">
              <Image src={"/321.png"} alt={"/"} width={700} height={1400} />
            </div>
          </div>
          <div className="my-6">
            <h2 className="text-2xl mt-4 tracking-wider font-bold">
              Brushed Raglan Sweatshirt
            </h2>
            <p className="text-xl text-[#B0B0B0]">Sweater</p>
            <p className="uppercase my-8 text-md font-bold">Select Size</p>
            <div className="flex gap-12 text-[#666666] font-bold ml-2">
              <p>XS</p>
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
            </div>
            <div className="flex items-center my-8 gap-10">
              <div>
                <p className="font-bold text-lg">Quantity:</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button className="bg-[#F1F1F1] text-4xl rounded-full px-4 py-1">
                  {" "}
                  -{" "}
                </button>
                <p>1</p>
                <button className="bg-[#F1F1F1] text-3xl rounded-full px-3 py-1 border-r-black">
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <div className="flex gap-4 my-4 items-center">
              <div className="bg-black hover:bg-black text-white">
                <Button>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
              <div>
                <p className="text-2xl font-bold">$195.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
