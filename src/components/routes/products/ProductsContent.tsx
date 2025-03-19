import { FaHeart, FaShoppingCart, FaLink } from "react-icons/fa";
import ProductsImg1 from "../../../assets/images/products-img1.webp";
import ProductsImg2 from "../../../assets/images/products-img2.webp";
import ProductsImg3 from "../../../assets/images/products-img3.webp";
import ProductsImg4 from "../../../assets/images/products-img4.webp";
import ProductsImg5 from "../../../assets/images/products-img5.webp";
import ProductsImg6 from "../../../assets/images/products-img6.webp";
import ProductsImg7 from "../../../assets/images/products-img7.webp";
import ProductsImg8 from "../../../assets/images/products-img8.webp";
import ProductsImg9 from "../../../assets/images/products-img9.webp";
import ArrivalsImg1 from "../../../assets/images/arrivals-img1.webp";
import ArrivalsImg2 from "../../../assets/images/arrivals-img2.webp";
import ArrivalsImg3 from "../../../assets/images/arrivals-img3.webp";
import CarouselItems from "../../ui/CarouselItems";
import preOrder from "../../../data/preOrder.json";
import { useContext, FC } from "react";
import ProductDetail from "./ProductDetail";
import { ProductsContext } from "./ProductsContext";
import SearchItem from "../../../components/ui/SearchItem";
import AsideItemList from "../../../pages/OurBlog/Content/AsideItemList";

interface ProductCardProps {
  id: number;
  img: string;
  title: string;
  text: string;
  price: number;
  sales?: boolean;
}

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
    img: ArrivalsImg1,
    title: "Breath of the Dragon",
    text: "The first book in the series, was published in 1997.",
  },
  {
    id: 2,
    img: ArrivalsImg2,
    title: "Blood Over Bright Heaven",
    text: "Political intrigue and dangerous magic in a fractured kingdom.",
  },
  {
    id: 3,
    img: ArrivalsImg3,
    title: "Bloodguard",
    text: "Fantasy story about a warrior who protects humans from supernatural creatures.",
  },
];

const productsData = [
  {
    id: 1,
    img: ProductsImg1,
    title: "Lauren Roberts",
    text: "Powerful (Special Edition): A Powerless Story",
    price: 30.75,
    sales: true,
  },
  {
    id: 2,
    img: ProductsImg2,
    title: "Rachel Gillig",
    text: "Two Twisted Crowns (Exclusive Edition)",
    price: 38.75,
  },
  {
    id: 3,
    img: ProductsImg3,
    title: "Rachel Gillig",
    text: "The Knight and the Moth (Limited Edition)",
    price: 29.99,
    sales: true,
  },
  {
    id: 4,
    img: ProductsImg4,
    title: "Sarah J. Maas",
    text: "A Court of Silver Flames (Exclusive Night Court Edition) (A Court of Thorns and Roses Series #4)",
    price: 35.15,
  },
  {
    id: 5,
    img: ProductsImg5,
    title: "Rebecca Yarros",
    text: "Onyx Storm (Deluxe Limited Edition)",
    price: 26.25,
    sales: true,
  },
  {
    id: 6,
    img: ProductsImg6,
    title: "Suzanne Collins",
    text: "Sunrise on the Reaping (Exclusive Edition) (A Hunger Games Novel)",
    price: 33.75,
  },
  {
    id: 7,
    img: ProductsImg7,
    title: "Mary Kubica",
    text: "She's not Worried (Extended Edition)",
    price: 26.99,
    sales: true,
  },
  {
    id: 8,
    img: ProductsImg8,
    title: "Rebecca Yarros",
    text: "Fourth Wing (Deluxe Limited Edition)",
    price: 28.99,
  },
  {
    id: 9,
    img: ProductsImg9,
    title: "Sue Lynn Tan",
    text: "Immortal (Collector's Edition)",
    price: 34.65,
    sales: true,
  },
];

const ProductCard: FC<ProductCardProps> = ({
  title,
  text,
  price,
  img,
  sales,
}) => {
  const { handleClick } = useContext(ProductsContext);

  return (
    <article className="products-content__article-container flex flex-col gap-4 pb-4 bg-white">
      <button onClick={handleClick} title="Go to Details">
        <img
          className="w-full object-cover"
          src={img}
          alt={`Portada de ${title}`}
          width="467"
          height="700"
          loading="lazy"
        />
      </button>
      <div className="flex flex-col gap-2 text-center">
        <div className="products-content__article-text">
          <p className="flex gap-2 justify-center items-center font-bold text-xl">
            <span className="text-neutral-600">${price}</span>
            {sales && (
              <span className="text-neutral-400/70 line-through">
                ${(price * 1.21).toFixed(2)}
              </span>
            )}
          </p>
          <button onClick={handleClick} title="Go to Details">
            <h2 className="uppercase font-bold text-2xl text-black">{title}</h2>
          </button>
        </div>
        <div className="products-content__hidden-container">
          <p>{text}</p>
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
              alt={`Portada de ${item.title}`}
              width="467"
              height="700"
              loading="lazy"
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
    <article className="product-cards-container__grid md:col-span-2 grid md:grid-cols-2 xl:col-span-3 xl:grid-cols-3 gap-8">
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </article>
  );
};

const ProductsContent = () => {
  const { isVisible } = useContext(ProductsContext);

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
        {!isVisible ? <ProductMain /> : <ProductDetail />}
      </article>
    </section>
  );
};

export default ProductsContent;
