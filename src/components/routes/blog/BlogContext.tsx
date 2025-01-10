import { createContext } from "react";

export const BlogContext = createContext({
  isVisible: false,
  handleClick: () => {},
});
