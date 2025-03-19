import CardArticle from "./CardArticle";
import { mainCardItems } from "../../../data/mainCardItems";
import "../../../styles/pages/Home/mainCards.css";

function MainCards() {
  return (
    <section className="main-cards w-11/12 mx-auto py-12" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
        <h2 className="section__title">
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
          {mainCardItems.map((item, index) => (
            <CardArticle key={index} {...item} />
          ))}
        </div>
      </article>
    </section>
  );
}

export default MainCards;
