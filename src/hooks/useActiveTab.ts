import { useState } from "react";

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index - 1); // -1 porque el primer elemento es el index 0
  };

  return { activeTab, handleClick };
};

export default useActiveTab;
