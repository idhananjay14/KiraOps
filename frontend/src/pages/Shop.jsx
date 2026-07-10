import ShopHero from "../components/shop/ShopHero";
import FilterBar from "../components/shop/FilterBar";
import ProductGrid from "../components/shop/ProductGrid";

export default function Shop() {
  return (
    <>
      <ShopHero />
      <FilterBar />
      <ProductGrid />
    </>
  );
}