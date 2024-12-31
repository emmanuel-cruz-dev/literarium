import PersonalImg from "../assets/images/package1.jpg";
import ProfessionalImg from "../assets/images/package2.jpg";
import BusinessImg from "../assets/images/package3.jpg";

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
    id: 2,
    title: "Professional",
    image: ProfessionalImg,
    price: 149,
    eBooks: 350,
    comics: 20,
    books: 15,
    magazines: 50,
  },
  {
    id: 3,
    title: "Business",
    image: BusinessImg,
    price: 199,
    eBooks: 500,
    comics: 30,
    books: 25,
    magazines: 68,
  },
];

const PriceCard = ({
  title,
  image,
  price,
  eBooks,
  comics,
  books,
  magazines,
}) => {
  return (
    <article className="box-shadow__item price-card-container flex flex-col justify-center items-center gap-6 text-center py-8 bg-slate-100 hover:bg-white transition-colors duration-300 ease-in-out">
      <img className="absolute top-0 w-full" src={image} alt="" />
      <div className="price-card__fill-item"></div>
      <h2 className="uppercase z-10 text-white font-bold text-2xl">{title}</h2>
      <div className="price-card__price-circle">
        <p className="text-3xl font-light">${price}</p>
        <p className="text-sm">Per Month</p>
      </div>
      <ul className="price-card__list flex flex-col gap-4 text-lg font-thin text-slate-500">
        <li>{eBooks} E-Books</li>
        <li>{comics} Comics</li>
        <li>{books} Books</li>
        <li>{magazines} Magazines</li>
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
            {plans.map((plan) => (
              <PriceCard key={plan.id} {...plan} />
            ))}
          </div>
        </article>
      </article>
    </section>
  );
};

export default PricePackage;
