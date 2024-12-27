import { FaGift, FaBook, FaTruck, FaCalculator } from "react-icons/fa";

const cardItems = [
  {
    icon: FaGift,
    title: "Free Gift Wrap",
    description:
      "Free gift wrapping on all purchases. Wrapping includes a blue box with your choice with Ribbon.",
    link: "#",
  },
  {
    icon: FaBook,
    title: "Buy Selling Used Books",
    description:
      "We provide the best selling of the used books. You can sell them to us if you have read them once.",
    link: "#",
  },
  {
    icon: FaTruck,
    title: "Free Shipping",
    description:
      "We provide free shipping over the $1000 purchase from one country to another with extra discount.",
    link: "#",
  },
  {
    icon: FaCalculator,
    title: "Returns & Exchanges",
    description:
      "Return and Exchange is possible in 5 days. In case of lost or damage Return & Exchange is not possible.",
    link: "#",
  },
];

const CardArticle = () => {
  return (
    <>
      {cardItems.map((item, index) => (
        <article
          key={index}
          className="main-cards__article-item flex flex-col gap-4 items-center text-center border border-gray-300 py-6 px-5 rounded-sm"
        >
          <div className="bg-slate-200 rounded-full p-5">
            <item.icon className="main-cards__icon text-5xl" />
          </div>
          <h3 className="font-medium text-lg main-cards__title">
            {item.title}
          </h3>
          <p>{item.description}</p>
          <a
            href={item.link}
            className="text-sm border border-gray-300 py-2 px-4 hover:bg-white hover:border-white hover:text-gray-600"
          >
            Read More
          </a>
        </article>
      ))}
    </>
  );
};

const MainCards = () => {
  return (
    <section className="main-cards w-11/12 mx-auto py-12" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
        <h2 className="uppercase font-bold text-3xl section__title">
          The Book guide <span className="text__accent-color">online</span> book
          store
        </h2>
        <p>
          The online Books Guide is the biggest big store and the biggest books
          library in the world that has a lot of the popular and the most top
          category books presented here. Top Authors are here just subscribe
          your email address and get updated with us.
        </p>
      </div>
      <article>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <CardArticle />
        </div>
      </article>
    </section>
  );
};

export default MainCards;
