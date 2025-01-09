import ProductsContent from "./ProductsContent";
import { ProductsContext } from "./ProductsContext";
import ProductsHero from "./ProductsHero";
import { useState } from "react";

const ProductsPage = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <ProductsContext.Provider value={{ isVisible, handleClick }}>
        <ProductsHero />
        <ProductsContent />
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsPage;
