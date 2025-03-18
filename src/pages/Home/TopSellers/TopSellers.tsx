import { BookArticleItems } from "../../../components/ui/BookArticleItems";

function TopSellers() {
  return (
    <section className="top-sellers bg-slate-100" id="top-sellers">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="section__title">
            Top <span className="text__accent-color">Best</span> Sellers
          </h2>
          <p>
            Discover the most popular and best-selling books in record time. Our
            collection includes bestsellers that are still available for you to
            easily purchase.
          </p>
        </div>
        <BookArticleItems cols={4} />
      </article>
    </section>
  );
}

export default TopSellers;
