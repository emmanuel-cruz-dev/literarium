import PagesHero from "../../../pages/PagesHero";
import ProductsContent from "./ProductsContent";
import { ProductsContext } from "./ProductsContext";
import { useState } from "react";

const ProductsPage = () => {
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
        <ProductsContent />
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsPage;
