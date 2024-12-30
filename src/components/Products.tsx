import CarouselItems from "./CarouselItems";
import newProducts from "../data/newProducts.json";
import bestSellers from "../data/bestSellers.json";

const Products = () => {
  return (
    <section className="products w-full" id="products">
      <article className="w-11/12 mx-auto py-20">
        <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-0 lg:grid-cols-3 justify-between">
          <CarouselItems key={1} articleTitle="New Product" arr={newProducts} />
          <CarouselItems key={2} articleTitle="Best Seller" arr={bestSellers} />

          {/* <CarouselItems articleTitle="Best Seller" />
          <CarouselItems articleTitle="Pre-Order" /> */}
        </div>
      </article>
    </section>
  );
};

export default Products;
