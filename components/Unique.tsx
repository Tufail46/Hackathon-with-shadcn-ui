import Image from "next/image";
import { Button } from "./ui/button";

export default function Unique() {
  return (
    <main className="max-w-[1240px] mx-auto w-full my-8">
      <div className="m-8 lg:m-1">
        <div>
          <h2 className="text-4xl font-bold lg:text-5xl tracking-wider lg:ml-96 lg:pl-72 mb-8 lg:leading-snug">
            Unique and Authentic Vintage Designer Jewellery
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 flex justify-around">
            <div>
              <div className="m-4 lg:m-8">
                <h3 className="text-xl font-bold my-4">
                  Using Good Quality Materials
                </h3>
                <p className="text-md mb-6">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="m-4 lg:m-8">
                <h3 className="text-xl font-bold my-4">
                  Modern Fashion Design
                </h3>
                <p className="text-md">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div>
              <div className="m-4 lg:m-8">
                <h3 className="text-xl font-bold my-4">
                  100% Handmade Products
                </h3>
                <p className="text-md mb-6">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="m-4 lg:m-8">
                <h3 className="text-xl font-bold my-4">
                  Discount for Bulk Orders
                </h3>
                <p className="text-md">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={"/feature.webp"} alt={"/"} width={500} height={500} />
          </div>
          <div>
            <div className="md:mt-16 text-md text-justify mb-8">
              <p>
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
            </div>
            <div>
              <Button className="bg-black hover:bg-black text-white">
                See All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
