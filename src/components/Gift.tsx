import { FaGift, FaGraduationCap, FaSmile } from "react-icons/fa";
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
      "Perfect for birthdays, holidays, or just because - give the gift of reading to someone special.",
  },
];

const GiftCard: FC<GiftCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex gap-2 text-2xl uppercase font-bold">
        <span>{icon}</span>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </article>
  );
};

const Gift = () => {
  return (
    <section className="blog background-accent__item" id="blog">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl text-white section__title gift__title">
            Bookstore Gift Cards
          </h2>
        </div>
        <article className="py-6 text-white">
          {cards.map((card) => (
            <GiftCard key={card.id} {...card} />
          ))}

          <FaGraduationCap size={24} />
          <FaSmile size={24} />
        </article>
      </article>
    </section>
  );
};

export default Gift;
