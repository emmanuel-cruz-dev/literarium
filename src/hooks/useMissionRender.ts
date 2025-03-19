import { useState } from "react";

const useMissionRender = (initialActive: number) => {
  const [active, setActive] = useState(initialActive);

  const handleClick = (index: number) => {
    setActive(index);
  };
  return { active, handleClick };
};

export default useMissionRender;
