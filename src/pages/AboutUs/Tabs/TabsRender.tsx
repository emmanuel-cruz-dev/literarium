import { FC, useState } from "react";
import { TabsRenderProps } from "types/types";

const TabsRender: FC<TabsRenderProps> = ({ arr }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index: number) => {
    setActiveTab(index - 1); // -1 porque el primer elemento es el index 0
  };

  return (
    <article className="grid md:grid-cols-4 gap-4" key={activeTab}>
      <div className="flex md:col-span-1 flex-col gap-4">
        {arr.map((tab) => (
          <button
            className={`btn__accent-color__hover ${
              activeTab === tab.id - 1 ? "active" : ""
            } bg-neutral-200/40 text-white px-4 py-3 text-left`}
            onClick={() => handleClick(tab.id)}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="md:col-span-3 flex flex-col gap-4 items-center">
        <img
          className="w-full"
          src={arr[activeTab].img}
          alt={`tab ${arr[activeTab].title}`}
          width="573"
          height="220"
          loading="lazy"
        />
        <div className="flex flex-col gap-4">
          <p>{arr[activeTab].text1}</p>
          <p>{arr[activeTab].text2}</p>
        </div>
      </div>
    </article>
  );
};

export default TabsRender;
