import { useState } from "react";

const useActiveTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index - 1);
  };

  return { activeTab, handleClick };
};

export default useActiveTab;
