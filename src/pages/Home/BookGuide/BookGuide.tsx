import bookGuideItems from "../../../data/bookGuideItems";
import CounterBanner from "../../../components/layout/CounterBanner/CounterBanner";
import BookGuideItem from "./BookGuideItem";

const items = [
  {
    number: 3578,
    title: "Books to Discover",
  },
  {
    number: 589,
    title: "Active Readers",
  },
  {
    number: 1250,
    title: "Renowned Authors",
  },
  {
    number: 98,
    title: "Awards Won",
  },
];

function BookGuide() {
  return (
    <>
      <section className="book-guide" id="book-guide">
        <article className="w-11/12 mx-auto py-12">
          <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
            <h2 className="section__title">
              Browse Our <span className="text__accent-color">Book</span>{" "}
              Selection
            </h2>
            <p>
              Discover unique and featured titles in our store. Add your
              favorites to your cart and enjoy a quick and easy shopping
              experience.
            </p>
          </div>
          <article className="py-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-8">
              {bookGuideItems.map((book) => (
                <BookGuideItem key={book.id} {...book} />
              ))}
            </div>
          </article>
        </article>
      </section>
      <CounterBanner arr={items} />
    </>
  );
}

export default BookGuide;
