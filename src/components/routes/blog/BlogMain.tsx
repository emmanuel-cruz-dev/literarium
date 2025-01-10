import { FC } from "react";
import {
  FaSearch,
  FaShareAlt,
  FaHeart,
  FaAngleDoubleRight,
} from "react-icons/fa";
import MainBlogWriter1 from "../../../assets/images/main-blog-writer1.jpg";
import MainBlogWriter2 from "../../../assets/images/main-blog-writer2.jpg";
import MainBlogWriter3 from "../../../assets/images/main-blog-writer3.jpg";
import MainBlogWriter4 from "../../../assets/images/main-blog-writer4.jpg";

import MainBlogImg1 from "../../../assets/images/main-blog-img1.jpg";
import MainBlogImg2 from "../../../assets/images/main-blog-img2.jpg";
import MainBlogImg3 from "../../../assets/images/main-blog-img3.jpg";
import MainBlogImg4 from "../../../assets/images/main-blog-img4.jpg";

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
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
  return (
    <article className="blog-main__article__container grid gap-6 grid-cols-5 border-b border-neutral-200 pb-8">
      <div className="col-span-1 flex flex-col gap-4">
        <a
          href="#"
          className="blog-main__article__user-img__container rounded-full overflow-hidden w-28"
          title="Author profile"
        >
          <img className="w-full h-full" src={userImage} alt="" />
        </a>

        <div className="border-b border-neutral-300 pb-4">
          <p>Writen By</p>
          <h2 className="text-xl uppercase font-semibold text-black">{user}</h2>
        </div>

        <div>
          <span className="blog-main__article__date-number text-3xl font-bold">
            {dateNumber}
          </span>
          <span className="uppercase font-bold text-sm">th</span>
          <p>
            {dateMonth} {dateYear}
          </p>
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-4">
        <div className="blog-main__article__post__img-list__container">
          <img src={blogImage} alt="" />
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
          <button className="w-fit">
            <h2 className="blog-main__article__title uppercase font-bold text-2xl text-black">
              {title}
            </h2>
          </button>
          <p>{text}</p>
          <button className="btn">Read More</button>
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
