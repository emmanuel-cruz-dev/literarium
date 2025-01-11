import { FC, useContext } from "react";
import { BlogContext } from "./BlogContext";
import {
  FaSearch,
  FaShareAlt,
  FaHeart,
  FaAngleDoubleRight,
} from "react-icons/fa";
import MainBlogWriter1 from "../../../assets/images/main-blog-writer1.webp";
import MainBlogWriter2 from "../../../assets/images/main-blog-writer2.webp";
import MainBlogWriter3 from "../../../assets/images/main-blog-writer3.webp";
import MainBlogWriter4 from "../../../assets/images/main-blog-writer4.webp";

import MainBlogImg1 from "../../../assets/images/main-blog-img1.webp";
import MainBlogImg2 from "../../../assets/images/main-blog-img2.webp";
import MainBlogImg3 from "../../../assets/images/main-blog-img3.webp";
import MainBlogImg4 from "../../../assets/images/main-blog-img4.webp";

interface BlogMainArticleProps {
  blogImage: string;
  title: string;
  text: string;
  userImage: string;
  user: string;
  dateNumber: number;
  dateMonth: string;
  dateYear: number;
}

const blogArticles = [
  {
    id: 1,
    blogImage: MainBlogImg1,
    title: "NerdCon Stories: Day Two",
    text: "Day two of NerdCon was packed with exciting talks, unforgettable stories, and unique encounters with authors. Find out what happened on this special day and the moments that thrilled fans of storytelling in all its forms.",
    userImage: MainBlogWriter1,
    user: "Clara",
    dateNumber: 25,
    dateMonth: "December",
    dateYear: 2024,
  },
  {
    id: 2,
    blogImage: MainBlogImg2,
    title: "October Reading: Easier Than Ever",
    text: "This October, dive into accessible and exciting reads that fit into any schedule. From short novels to inspirational articles, it’s never been easier to enjoy the pleasure of reading and disconnect from daily stress.",
    userImage: MainBlogWriter2,
    user: "Jhony",
    dateNumber: 19,
    dateMonth: "November",
    dateYear: 2024,
  },
  {
    id: 3,
    blogImage: MainBlogImg3,
    title: "Just Trying to Be Part of the Herd",
    text: "Sometimes, fitting in can feel like a constant struggle. Explore this honest reflection on belonging, authenticity, and what it really means to feel part of something bigger, without losing sight of who you are.",
    userImage: MainBlogWriter3,
    user: "James",
    dateNumber: 13,
    dateMonth: "October",
    dateYear: 2024,
  },
  {
    id: 4,
    blogImage: MainBlogImg4,
    title: "Depression: Is This Autumn?",
    text: "Autumn can be beautiful, but it also brings with it feelings of melancholy. This article looks at how seasonal changes affect our mood and offers tips for coping with emotional challenges during this season.",
    userImage: MainBlogWriter4,
    user: "Valerie",
    dateNumber: 4,
    dateMonth: "August",
    dateYear: 2024,
  },
];

const BlogMainArticle: FC<BlogMainArticleProps> = ({
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
          title="Author profile"
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

const BlogMain = () => {
  return (
    <article className="lg:col-span-3 mx-auto flex flex-col gap-8">
      {blogArticles.map((article) => (
        <BlogMainArticle key={article.id} {...article} />
      ))}
      <div>
        <ul className="blog-main__article__arrows-list">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">
              <FaAngleDoubleRight />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BlogMain;
