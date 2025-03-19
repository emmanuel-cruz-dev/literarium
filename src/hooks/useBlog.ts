import { useState } from "react";

const useBlog = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };
  return { isVisible, handleClick };
};

export default useBlog;
