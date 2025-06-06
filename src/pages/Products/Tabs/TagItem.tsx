import { FC } from "react";
import { TagItemProps } from "../../../types/types";

const TagItem: FC<TagItemProps> = ({ arr }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {arr.map((item, index) => (
        <a
          href="#"
          className="border border-slate-300 py-2 px-3 uppercase font-semibold text-sm hover:bg-neutral-600 hover:text-white transition-colors duration-300 ease-in-out"
          key={index}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default TagItem;
