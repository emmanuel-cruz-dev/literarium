import { FC } from "react";
import { CardArticleProps } from "types/types";

const CardArticle: FC<CardArticleProps> = ({
  id,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <article
      key={id}
      className="main-cards__article-item flex flex-col gap-4 items-center text-center border border-gray-300 py-12 lg:py-6 px-5 rounded-sm"
    >
      <div className="bg-slate-200 rounded-full p-5">
        <span className="main-cards__icon text-5xl">
          <Icon />
        </span>
      </div>
      <h3 className="font-medium text-lg main-cards__title mb-2">{title}</h3>
      <p className="w-10/12 md:w-11/12">{description}</p>
      <a
        href="#"
        className="text-sm border border-gray-300 py-2 px-4 hover:bg-white hover:border-white hover:text-gray-600"
      >
        Read More
      </a>
    </article>
  );
};

export default CardArticle;
