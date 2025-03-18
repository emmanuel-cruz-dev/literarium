import CarouselItems from "./CarouselItems";
import newProducts from "../data/newProducts.json";
import bestSellers from "../data/bestSellers.json";
import preOrder from "../data/preOrder.json";

function Products() {
  return (
    <section className="products w-full" id="products">
      <article className="w-11/12 mx-auto py-20">
        <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-8 xl:grid-cols-3 justify-between">
          <CarouselItems
            key={1}
            articleTitle="New Products"
            arr={newProducts}
          />

          <CarouselItems
            key={2}
            articleTitle="Best Sellers"
            arr={bestSellers}
          />

          <CarouselItems key={3} articleTitle="Pre-Order" arr={preOrder} />
        </div>
      </article>
    </section>
  );
}

export default Products;
