import { FC } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BlogCardProps } from "../../../types/types";

const BlogCard: FC<BlogCardProps> = ({
  id,
  author,
  title,
  description,
  image,
  date,
  month,
}) => {
  return (
    <article
      key={id}
      className="blog__card-article flex flex-col md:flex-row md:w-fit mx-auto items-center gap-6 box-shadow__item bg-gray-100/60 hover:bg-white transition-colors duration-300 ease-in-out"
    >
      <div className="relative w-full h-96 md:h-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`Post ${title} de ${author}`}
          width="270"
          height="247"
          loading="lazy"
        />
        <div className="blog__card-article__date absolute bottom-0 right-0 left-40 transition-all duration-300 text-white text-center">
          <p className="flex flex-col">
            <span className="bg-slate-100/70 text-slate-600 text-2xl">
              {date}
            </span>
            <span className="background-accent__item py-1">{month}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col px-6 pb-6 gap-2 md:px-0 md:py-6">
        <p className="font-light text-slate-800">Posted by {author}</p>
        <h2 className="blog__card-title">{title}</h2>
        <p className="md:w-72 text-slate-700 md:pr-6">{description}</p>
        <a
          className="blog__card-anchor flex items-center gap-2 uppercase font-semibold"
          href="#"
        >
          See More
          <AiOutlineDoubleRight />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
