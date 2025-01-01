import { FaGift, FaBook, FaTruck, FaCalculator } from "react-icons/fa";
import { FC } from "react";

interface CardArticleProps {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const cardItems: CardArticleProps[] = [
  {
    id: 1,
    icon: <FaGift />,
    title: "Free Gift Wrap",
    description:
      "We offer personalized gift wrapping, with blue boxes and ribbons of your choice, completely free of charge.",
  },
  {
    id: 2,
    icon: <FaBook />,
    title: "Buy Selling Used Books",
    description:
      "Buy and sell used books with ease. We offer a reliable platform to give new life to the books you've already read.",
  },
  {
    id: 3,
    icon: <FaTruck />,
    title: "Free Shipping",
    description:
      "Enjoy free international shipping on purchases over $1000, with additional discounts for you.",
  },
  {
    id: 4,
    icon: <FaCalculator />,
    title: "Returns & Exchanges",
    description:
      "Returns or exchanges within 5 days. Please note that we do not accept returns in case of loss or damage.",
  },
];

const CardArticle: FC<CardArticleProps> = ({
  id,
  icon,
  title,
  description,
}) => {
  return (
    <article
      key={id}
      className="main-cards__article-item flex flex-col gap-4 items-center text-center border border-gray-300 py-12 lg:py-6 px-5 rounded-sm"
    >
      <div className="bg-slate-200 rounded-full p-5">
        <span className="main-cards__icon text-5xl">{icon}</span>
      </div>
      <h3 className="font-medium text-lg main-cards__title mb-2">{title}</h3>
      <p className="w-10/12 md:w-11/12">{description}</p>
      <a
        href="#"
        className="text-sm border border-gray-300 py-2 px-4 hover:bg-white hover:border-white hover:text-gray-600"
      >
        Read More
      </a>
    </article>
  );
};

const MainCards: FC = () => {
  return (
    <section className="main-cards w-11/12 mx-auto py-12" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
        <h2 className="uppercase font-bold text-3xl section__title">
          Your Ultimate <span className="text__accent-color">Guide</span> to
          Online Books
        </h2>
        <p>
          Find a wide selection of popular books and top-rated categories on our
          platform. Subscribe with your email to stay up to date with the latest
          news and the best authors.
        </p>
      </div>
      <article>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-8 py-6">
          {cardItems.map((item, index) => (
            <CardArticle key={index} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default MainCards;
