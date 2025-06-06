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
import SortFilter from "./SortFilter";

function Content() {
  const { isVisible } = useContext(ProductsContext);

  return (
    <section className="products-content bg-neutral-100" id="products-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 py-12 text-neutral-600 font-light">
        <aside className="md:col-span-1 flex flex-col gap-6">
          <SearchItem />
          <SortFilter />
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
