import { productsData } from "../../../data/productsData";
import ProductCard from "./ProductCard";

function ProductMain() {
  return (
    <article className="product-cards-container__grid md:col-span-2 grid md:grid-cols-2 xl:col-span-3 xl:grid-cols-3 gap-8">
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </article>
  );
}

export default ProductMain;
