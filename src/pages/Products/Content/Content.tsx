import CarouselItems from "../../../components/ui/CarouselItems";
import preOrder from "../../../data/preOrder.json";
import { useContext } from "react";
import Detail from "../Detail/Detail";
import { ProductsContext } from "../../../context/ProductsContext";
import SearchItem from "../../../components/ui/SearchItem";
import AsideItemList from "../../OurBlog/Content/AsideItemList";
import NewArrivals from "./NewArrivals";
import ProductMain from "./ProductMain";
import { genresData } from "../../../data/genresData";

function Content() {
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
          <AsideItemList title="Categories" dataArr={genresData} />
          <CarouselItems
            key={3}
            articleClass="blog-content__aside__item-title"
            articleTitle="Pre-Order"
            arr={preOrder}
          />
        </aside>
        {!isVisible ? <ProductMain /> : <Detail />}
      </article>
    </section>
  );
}

export default Content;
