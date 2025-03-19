import { FC } from "react";
import { LatestPostsProps } from "types/types";

const LatestPosts: FC<LatestPostsProps> = ({ title, date, img }) => {
  return (
    <article className="flex items-center gap-4 pb-4 border-b border-slate-300">
      <img
        className="w-16 h-16 rounded-full"
        src={img}
        alt={title}
        width="370"
        height="370"
        loading="lazy"
      />
      <div className="uppercase text-sm">
        <h3 className="font-bold text-black">{title}</h3>
        <p>{date}</p>
      </div>
    </article>
  );
};

export default LatestPosts;
