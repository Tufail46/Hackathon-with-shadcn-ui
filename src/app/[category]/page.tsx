import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

const getProducts = async ({ params }: { params: { category: string } }) => {
  const str = params.category;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  if (str2 === "Male" || str2 === "Female" || str2 === "Kids") {
    const res = await client.fetch(
      `*[_type=="products" && category->title == "${str2}"]{
        price,
        _id,
        title,
        image,
        subtitle,
        category -> {
          title,
          _id
        }
      }`
    );
    return res;
  } else {
    const res = await client.fetch(`*[_type=="products"]{
      price,
      _id,
      title,
      image,
      subtitle,
      category -> {
        title,
        _id
      }
    }`);
    return res;
  }
};

interface IProduct {
  title: "string";
  _id: "string";
  subtitle: "string";
  image: IImage;
  price: "number";
  category: {
    title: "string";
    _id: "string";
  };
}

const page = async ({ params }: { params: { category: string } }) => {
  const data: IProduct[] = await getProducts({ params });
  return (
    <div className="max-w-[1240px] w-full mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        {data.map((item) => (
          <div key={item._id} className="m-8">
            <Image
              width={300}
              height={300}
              src={urlForImage(item.image).url()}
              alt={"products"}
            />
            <h2 className="text-xl font-bold my-2">{item.title}</h2>
            <p className="text-sm text-gray-400 font-bold my-2">
              {item.subtitle}
            </p>
            <p className="text-2xl font-bold my-2">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
