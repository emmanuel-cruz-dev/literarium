import PagesHero from "../../PagesHero";
import Content from "../Content/Content";
import { ProductsContext } from "../../../context/ProductsContext";
import { useState } from "react";

function Products() {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };

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
