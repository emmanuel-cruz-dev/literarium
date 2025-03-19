import { FC, useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { FaSearch, FaShareAlt, FaHeart } from "react-icons/fa";
import { MainArticleProps } from "types/types";

const MainArticle: FC<MainArticleProps> = ({
  blogImage,
  title,
  text,
  userImage,
  user,
  dateNumber,
  dateMonth,
  dateYear,
}) => {
  const { handleClick } = useContext(BlogContext);

  return (
    <article className="blog-main__article__container grid gap-6 md:grid-cols-5 border-b border-neutral-200 pb-8">
      <div className="col-span-1 flex md:flex-col items-center gap-4">
        <a
          href="#"
          className="blog-main__article__user-img__container rounded-full overflow-hidden w-28"
        >
          <img
            className="w-full h-full"
            src={userImage}
            alt={user}
            width="77"
            height="76"
            loading="lazy"
          />
        </a>

        <div>
          <div className="flex md:flex-col gap-2 border-b border-neutral-300 pb-4">
            <p>Written By</p>
            <h2 className="text-lg uppercase font-semibold text-black">
              {user}
            </h2>
          </div>

          <div className="flex items-end gap-2 md:flex-col md:items-start pt-2">
            <div>
              <span className="blog-main__article__date-number text-3xl font-bold">
                {dateNumber}
              </span>
              <span className="uppercase font-bold text-sm">th</span>
            </div>
            <p>
              {dateMonth} {dateYear}
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 flex flex-col gap-4">
        <div className="blog-main__article__post__img-list__container">
          <img
            src={blogImage}
            alt={title}
            width="711"
            height="310"
            loading="lazy"
          />
          <ul className="blog-main__article__social-icons">
            <li>
              <a href="#">
                <FaSearch />
              </a>
            </li>
            <li>
              <a href="#">
                <FaShareAlt />
              </a>
            </li>
            <li>
              <a href="#">
                <FaHeart />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button className="w-fit" onClick={handleClick} title="Blog Details">
            <h2 className="blog-main__article__title uppercase font-bold text-2xl text-black">
              {title}
            </h2>
          </button>
          <p>{text}</p>
          <button className="btn" onClick={handleClick} title="Blog Details">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
};

export default MainArticle;
