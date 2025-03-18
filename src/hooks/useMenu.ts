import { useState, useEffect } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menu]);

  return { menu, toggleMenu };
};

export default useMenu;
