import { FC } from "react";
import { BookArticleItemsProps } from "types/types";
import BookCard from "../../pages/Home/TopSellers/BookCard";
import booksTopSellers from "../../data/booksTopSellers";

export const BookArticleItems: FC<BookArticleItemsProps> = ({ cols }) => {
  return (
    <article>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${cols} gap-12 lg:gap-8 py-6`}
      >
        {booksTopSellers.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </article>
  );
};
