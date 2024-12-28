import CarouselItems from "./CarouselItems";

const Products = () => {
  return (
    <section className="products w-full" id="products">
      <article className="w-11/12 mx-auto py-20">
        <div className="w-full grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-0 lg:grid-cols-3 justify-between">
          <CarouselItems title="New Product" />
          <CarouselItems title="Best Seller" />
          <CarouselItems title="Pre-Order" />
        </div>
      </article>
    </section>
  );
};

export default Products;
