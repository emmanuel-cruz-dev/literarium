import { createContext } from "react";

export const ProductsContext = createContext({
  isVisible: false,
  handleClick: () => {},
});
