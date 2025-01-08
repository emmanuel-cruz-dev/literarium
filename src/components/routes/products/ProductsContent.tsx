import { FaHeart, FaShoppingCart, FaLink } from "react-icons/fa";
import BookImg1 from "../../../assets/images/books-list1.jpg";

const ProductCard = () => {
  return (
    <article className="products-content__article-container flex flex-col gap-4 pb-4 bg-white">
      <a href="#">
        <img src={BookImg1} alt="" />
      </a>
      <div className="flex flex-col gap-2 text-center">
        <div className="products-content__article-text">
          <p className="flex gap-2 justify-center items-center font-bold text-xl">
            <span className="text-neutral-600">$80.75</span>
            <span className="text-neutral-400/70 line-through">$90.75</span>
          </p>
          <h2 className="uppercase font-bold text-2xl text-black">
            Stephen King
          </h2>
        </div>
        <div className="products-content__hidden-container">
          <p>
            Reading books as a hobby was always a noble and pleasant pastime.
          </p>
          <ul className="products-content__hidden-container__list">
            <li>
              <a href="#">
                <FaHeart />
              </a>
            </li>
            <li>
              <a href="#">
                <FaShoppingCart />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLink />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

const ProductsContent = () => {
  return (
    <section className="products-content bg-neutral-100" id="products-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-6 text-neutral-600 font-light">
        <aside className="md:col-span-1 bg-cyan-400"></aside>
        <article className="auto-rows-[440px] md:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </article>
      </article>
    </section>
  );
};

export default ProductsContent;
