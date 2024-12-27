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
      "Returns and exchanges are accepted within 30 days of purchase. In case of lost or damage, Returns & Exchanges are not possible.",
    link: "#",
  },
];

const CardArticle = () => {
  return (
    <>
      {cardItems.map((item, index) => (
        <article
          key={index}
          className="flex flex-col gap-4 items-center text-center border border-gray-300 p-6"
        >
          <div className="bg-slate-200 rounded-full p-6">
            <item.icon className="text-5xl text-slate-500" />
          </div>
          <h3 className="font-medium text-lg">{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link} className="">
            Read More
          </a>
        </article>
      ))}
    </>
  );
};

const MainCards = () => {
  return (
    <section className="main-cards w-11/12 mx-auto" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-8">
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
        <div className="grid grid-cols-4 gap-8">
          <CardArticle />
        </div>
      </article>
    </section>
  );
};

export default MainCards;
