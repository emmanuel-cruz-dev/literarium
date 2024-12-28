import CarouselItems from "./CarouselItems";

const Products = () => {
  return (
    <section className="bg-slate-100">
      <article className="top-sellers w-11/12 mx-auto py-12" id="top-sellers">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <CarouselItems />
        </div>
      </article>
    </section>
  );
};

export default Products;
