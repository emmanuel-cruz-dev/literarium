import giftCards from "../../../data/giftCards";
import laptopImg1 from "../../../assets/images/laptop1.avif";
import GiftCard from "./GiftCard";

function Gift() {
  return (
    <section className="gift background-accent__item" id="gift">
      <article className="w-11/12 mx-auto py-12 px-4">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="text-white section__title gift__title">
            Bookstore Gift Cards
          </h2>
        </div>
        <article className="flex flex-col py-12 lg:py-6 text-white">
          {giftCards.map((card) => (
            <GiftCard key={card.id} {...card} />
          ))}
        </article>
      </article>
      <div className="gift__background-image">
        <img
          src={laptopImg1}
          alt="Laptop"
          loading="lazy"
          width="891"
          height="437"
        />
      </div>
    </section>
  );
}

export default Gift;
