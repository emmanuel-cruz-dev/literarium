import { FaHeart, FaShoppingCart, FaLink } from "react-icons/fa";
import BookImg1 from "../../../assets/images/books-list1.jpg";
import { SearchItem, AsideItemList } from "../blog/BlogContent";
import CarouselItems from "../../CarouselItems";
import preOrder from "../../../data/preOrder.json";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

const data1 = [
  "Fiction",
  "Non-fiction",
  "Mystery & Suspense",
  "Fantasy & Science Fiction",
  "Romance",
  "History",
  "Self-Help",
  "Children & Young Adult",
];

const arrivalsData = [
  {
    id: 1,
    img: BookImg1,
    title: "consetetur sadip scing",
    text: "Sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
  },
  {
    id: 2,
    img: BookImg1,
    title: "Consetetur sadi elitr",
    text: "Magna aliquyam erat, sed diam voluptua. At vero eos et accusam.",
  },
  {
    id: 3,
    img: BookImg1,
    title: "Conset sading elitr",
    text: "At vero eos et accusam et justo duo dolores et ea rebum.",
  },
];

const ProductCard = () => {
  return (
    <article className="products-content__article-container flex flex-col gap-4 pb-4 bg-white">
      <button>
        <img className="w-full object-cover" src={BookImg1} alt="" />
      </button>
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

const NewArrivals = () => {
  return (
    <article className="new-arrivals__container flex flex-col gap-4">
      <h2 className="blog-content__aside__item-title">New Arrivals</h2>
      {arrivalsData.map((item, index) => (
        <article
          key={index}
          className="new-arrivals__card flex md:flex-col md:items-center lg:flex-row lg:items-start gap-4 border border-slate-300 p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <a
            href="#"
            className="new-arrivals__img-container w-20 flex-shrink-0"
          >
            <img
              className="new-arrivals__img w-full h-full object-cover"
              src={item.img}
              alt=""
            />
          </a>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-bold text-black leading-tight">
              {item.title}
            </h2>
            <p className="text-sm">{item.text}</p>
          </div>
        </article>
      ))}
    </article>
  );
};

const ProductMain = () => {
  return (
    <article className="auto-rows-[600px] md:auto-rows-[400px] lg:auto-rows-[528px] xl:auto-rows-[440px] md:col-span-2 grid md:grid-cols-2 xl:col-span-3 xl:grid-cols-3 gap-8">
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
  );
};

const ProductsContent = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <section className="products-content bg-neutral-100" id="products-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 py-12 text-neutral-600 font-light">
        <aside className="md:col-span-1 flex flex-col gap-6">
          <SearchItem />

          <article className="new-arrivals__container flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Sort by</h2>
            <select
              className="border border-slate-300 py-2 px-3 focus:outline-none bg-inherit text-neutral-600 cursor-pointer"
              name="sort"
              id="sort"
            >
              <option value="most-relevant">Most Relevant</option>
              <option value="newest">Newest</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
            </select>
          </article>

          <NewArrivals />
          <AsideItemList title="Categories" dataArr={data1} />
          <CarouselItems
            key={3}
            articleClass="blog-content__aside__item-title"
            articleTitle="Pre-Order"
            arr={preOrder}
          />
        </aside>

        <button
          className="font-bold uppercase text-black absolute left-[38%] z-20 bg-white px-4 py-2"
          onClick={handleClick}
        >
          Click
        </button>
        {!isVisible ? <ProductMain /> : <ProductDetail />}
      </article>
    </section>
  );
};

export default ProductsContent;
