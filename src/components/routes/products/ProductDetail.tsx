import { FC } from "react";
import BookDetail from "../../../assets/images/book-detail.jpg";
import StarsElement from "../../StarsElement";
import { BookArticleItems } from "../../TopSellers";
import ProductTabs from "./ProductTabs";

const ProductDetail: FC = () => {
  return (
    <section className="col-span-3 flex flex-col gap-6">
      <article className="flex gap-4">
        <img src={BookDetail} alt="" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase font-semibold text-3xl text-black">
              Application Health and Well-Being
            </h2>
            <p className="flex gap-2">
              <StarsElement num={4} />
              <span>4 Customer Reviews</span>
            </p>
            <span className="text__accent-color font-bold text-4xl">
              $ 19.90
            </span>
            <p className="font-medium">
              Author :{" "}
              <span className="text__accent-color">Robert L. Lukdke</span>
            </p>
          </div>
          <hr />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <hr />
          <ul>
            <li>Category: Books.</li>
            <li>Tag: books.</li>
            <li>Author: Daniel Abraham</li>
            <li>Publisher: Journal inc</li>
            <li>Product ID: 1100</li>
          </ul>
          <hr />
          <div className="flex gap-4 [&>button]:uppercase [&>button]:font-bold [&>button]:text-[13px] ">
            <button className="btn">Add to Cart</button>
            <button className="btn">Add to Wishlist</button>
            <button className="btn">Get a Quote</button>
          </div>
        </div>
      </article>
      <ProductTabs />
      <article>
        <h2 className="uppercase font-bold text-3xl text-black">
          Related Books
        </h2>
        <BookArticleItems cols={3} />
      </article>
    </section>
  );
};

export default ProductDetail;
