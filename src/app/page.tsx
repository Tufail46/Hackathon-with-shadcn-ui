import Hero from "../../components/Hero";
import NewsLetter from "../../components/NewsLetter";
import Products from "../../components/Products";
import Promotions from "../../components/Promotions";
import Unique from "../../components/Unique";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
      <Unique />
      <NewsLetter />
    </>
  );
}
