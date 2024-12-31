import {
  FaGift,
  FaGraduationCap,
  FaSmile,
  FaChevronRight,
} from "react-icons/fa";
import { FC } from "react";

interface GiftCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const cards = [
  {
    id: 1,
    icon: <FaGift />,
    title: "Any Occasion",
    description:
      "Our gift cards offer the freedom to explore new worlds, discover fresh perspectives, and find that perfect book that speaks to the soul. Perfect for birthdays, holidays, or just because - give the gift of reading to someone special.",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "Special Occasion",
    description:
      "There are many special occasions in the lives of our friends, family, and colleagues, each offering an opportunity to commemorate the day with a unique and personalized book.",
  },
  {
    id: 3,
    icon: <FaSmile />,
    title: "Cards for Kids",
    description:
      "Spark a lifelong love of reading in young minds with our gift cards designed especially for children. Help young readers discover new adventures with a gift card they can use to choose their own perfect book.",
  },
];

const GiftCard: FC<GiftCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex items-center w-[52%]">
      <div className="flex flex-col p-4 py-6 hover:bg-white/20">
        <div className="flex items-center gap-2 text-2xl uppercase font-bold">
          <span className="text-3xl">{icon}</span>
          <h2>{title}</h2>
        </div>
        <p className="font-light">{description}</p>
      </div>
      <span className="-ml-3 rounded-full bg-white/20 p-2">
        <FaChevronRight />
      </span>
    </article>
  );
};

const Gift = () => {
  return (
    <section className="blog background-accent__item" id="blog">
      <article className="w-11/12 mx-auto py-12 px-4">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl text-white section__title gift__title">
            Bookstore Gift Cards
          </h2>
        </div>
        <article className=" flex flex-col py-6 text-white">
          {cards.map((card) => (
            <GiftCard key={card.id} {...card} />
          ))}
        </article>
      </article>
    </section>
  );
};

export default Gift;
