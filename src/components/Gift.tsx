import {
  FaGift,
  FaGraduationCap,
  FaSmile,
  FaChevronRight,
} from "react-icons/fa";
import { FC } from "react";
import laptopImg1 from "../assets/images/laptop1.avif";

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
    <article className="gift__card-body flex items-center lg:w-[56%]">
      <div className="gift__card-item flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2 text-xl uppercase font-bold">
          <span className="text-2xl">{icon}</span>
          <h2>{title}</h2>
        </div>
        <p className="font-light">{description}</p>
      </div>
      <span className="hidden lg:block gift__card-item__arrow -ml-4 rounded-full p-[7px]">
        <FaChevronRight />
      </span>
    </article>
  );
};

const Gift = () => {
  return (
    <section className="gift background-accent__item" id="gift">
      <article className="w-11/12 mx-auto py-12 px-4">
        
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="text-white section__title gift__title">
            Bookstore Gift Cards
          </h2>
        </div>
        <article className="flex flex-col py-12 lg:py-6 text-white">
          {cards.map((card) => (
            <GiftCard key={card.id} {...card} />
          ))}
        </article>
      </article>
        <div className="gift__background-image">
          <img src={laptopImg1} alt="Laptop" />
        </div>
    </section>
  );
};

export default Gift;
