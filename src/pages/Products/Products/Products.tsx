import PagesHero from "../../PagesHero";
import Content from "../Content/Content";
import { ProductsContext } from "../../../context/ProductsContext";
import useToggleVisibility from "../../../hooks/useToggleVisibility";

function Products() {
  const { isVisible, handleClick } = useToggleVisibility();

  return (
    <>
      <ProductsContext.Provider value={{ isVisible, handleClick }}>
        <PagesHero title="Products" />
        <Content />
      </ProductsContext.Provider>
    </>
  );
}

export default Products;
