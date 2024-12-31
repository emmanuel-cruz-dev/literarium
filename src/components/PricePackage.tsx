import PersonalImg from "../assets/images/package1.jpg";

const plans = [
  {
    id: 1,
    title: "Personal",
    image: PersonalImg,
    price: 77,
    eBooks: 250,
    comics: 10,
    books: 5,
    magazines: 36,
  },
  {
    id: 1,
    title: "Personal",
    image: PersonalImg,
    price: 77,
    eBooks: 250,
    comics: 10,
    books: 5,
    magazines: 36,
  },
  {
    id: 1,
    title: "Personal",
    image: PersonalImg,
    price: 77,
    eBooks: 250,
    comics: 10,
    books: 5,
    magazines: 36,
  },
];

const PriceCard = () => {
  return (
    <article className="box-shadow__item price-card-container flex flex-col justify-center items-center gap-6 text-center py-8 bg-slate-100 hover:bg-white transition-colors duration-300 ease-in-out">
      <img className="absolute top-0 w-full" src={PersonalImg} alt="" />
      <div className="price-card__fill-item"></div>
      <h2 className="uppercase z-10 text-white font-bold text-2xl">Personal</h2>
      <div className="price-card__price-circle">
        <p className="text-3xl font-light">$77</p>
        <p className="text-sm">Per Month</p>
      </div>
      <ul className="price-card__list flex flex-col gap-4 text-lg font-thin text-slate-500">
        <li>250 E-Books</li>
        <li>10 Comics</li>
        <li>5 Books</li>
        <li>36 Magazines</li>
      </ul>
      <a className="btn z-10" href="#">
        Purchase Now
      </a>
    </article>
  );
};

const PricePackage = () => {
  return (
    <section className="price-package" id="blog">
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
