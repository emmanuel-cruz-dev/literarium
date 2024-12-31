const PriceCard = () => {
  return (
    <article className="text-center">
      <h2>Personal</h2>
      <div>
        <p>$77</p>
        <p>Per Month</p>
      </div>
      <ul>
        <li>250 E-Books</li>
        <li>10 Comics</li>
        <li>5 Books</li>
        <li>36 Magazines</li>
      </ul>
    </article>
  );
};

const PricePackage = () => {
  return (
    <section className="price-package h-screen" id="blog">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl section__title">
            Find Your <span className="text__accent-color">Best Price</span>{" "}
            Package
          </h2>
          <p>
            Find the best prices for our premium book packages. You can purchase
            these packages and enjoy discounts on your book purchases.
          </p>
        </div>
        <article className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </article>
      </article>
    </section>
  );
};

export default PricePackage;
