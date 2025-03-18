import { FC } from "react";
import BookDetail from "../../../assets/images/book-detail.webp";
import StarsElement from "../../StarsElement";
import { BookArticleItems } from "../../ui/BookArticleItems";
import ProductTabs from "./ProductTabs";
import { ProductsContext } from "./ProductsContext";
import { useContext } from "react";

const ProductDetail: FC = () => {
  const { handleClick } = useContext(ProductsContext);

  return (
    <section className="md:col-span-2 xl:col-span-3 flex flex-col gap-8 relative">
      <article className="flex flex-col lg:flex-row gap-4">
        <figure className="max-w-[18rem] md:max-w-64 lg:shrink-0">
          <img
            className="w-full object-cover"
            src={BookDetail}
            alt="Portada de libro The Design of Everyday Things de Donald A. Norman"
            width="323"
            height="486"
            loading="lazy"
          />
        </figure>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase font-bold text-2xl text-black">
              The Design of Everyday Things
            </h2>
            <div className="flex gap-2">
              <StarsElement num={4} />
              <span>230 Customer Reviews</span>
            </div>
            <span className="text__accent-color font-bold text-4xl">
              $ 29.95
            </span>
            <p className="font-medium">
              Author :{" "}
              <span className="text__accent-color">Donald A. Norman</span>
            </p>
          </div>
          <hr />
          <p>
            Discover why some objects are a joy to use while others frustrate.
            Norman reveals the psychology behind good design, transforming how
            you see everyday objects. A must-read for designers and curious
            minds.
          </p>
          <hr />
          <ul>
            <li>Category: Design Books.</li>
            <li>Tag: design.</li>
            <li>Author: Donald A. Norman</li>
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
        <button
          className="btn absolute top-0 right-0 uppercase"
          onClick={handleClick}
          title="Back to Products"
        >
          Back
        </button>
      </article>

      <ProductTabs />

      <article>
        <h2 className="uppercase font-bold text-2xl text-black">
          Related Books
        </h2>
        <BookArticleItems cols={3} />
      </article>
    </section>
  );
};

export default ProductDetail;
