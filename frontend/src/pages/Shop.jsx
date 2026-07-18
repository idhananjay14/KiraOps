import { useSearchParams } from "react-router-dom";
import ShopHero from "../components/shop/ShopHero";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  return (
    <>
      <ShopHero />
      <FilterBar activeCategory={category} />
      <ProductGrid category={category} />
    </>
  );
}