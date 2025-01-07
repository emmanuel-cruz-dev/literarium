import { FaHeart, FaShoppingCart, FaLink } from "react-icons/fa";
import BookImg1 from "../../../assets/images/books-list1.jpg";

const ProductCard = () => {
  return (
    <article className="products-content__article-container flex flex-col gap-4 mb-12 bg-white">
      <img src={BookImg1} alt="" />
      <div className="flex flex-col gap-2 text-center">
        <div>
          <div className="flex gap-2 justify-center items-center">
            <span>$80.75</span>
            <span className="line-through">$90.75</span>
          </div>
          <h2 className="uppercase font-semibold text-2xl text-black mb-2">
            Stephen King
          </h2>
        </div>
        <div className="products-content__hidden-container">
          <div className="products-content__hidden-container__body">
            <p>
              Well, reading books as a hobby was always a noble, pleasant and
              very u
            </p>
            <div className="flex gap-4 justify-center items-center">
              <a href="#">
                <FaHeart />
              </a>
              <a href="#">
                <FaShoppingCart />
              </a>
              <a href="#">
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const ProductsContent = () => {
  return (
    <section className="products-content bg-neutral-100" id="products-content">
      <article className="w-11/12 mx-auto grid grid-cols-4 gap-8 py-6 text-neutral-600 font-light">
        <aside className="col-span-1 bg-cyan-400"></aside>
        <article className="col-span-3 grid grid-cols-3 gap-8">
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
