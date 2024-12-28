import CarouselItems from "./CarouselItems";

const Products = () => {
  return (
    <section className="products w-full" id="products">
      <article className="w-11/12 mx-auto py-12">
        <div className="w-full grid grid-cols-3 justify-between">
          <CarouselItems />
          <CarouselItems />
          <CarouselItems />
        </div>
      </article>
    </section>
  );
};

export default Products;
