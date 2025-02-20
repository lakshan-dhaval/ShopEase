import PopularArticls from "@/components/PopularArticls";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import Collection from "@/components/Section3";
import ArticlesControllers from "@/components/ui/articlesControllers";
import Card from "@/components/ui/Card";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Card />
      <Section />
      <ProductCard />
      <Collection />
      <PopularArticls />
    </>
  );
}
