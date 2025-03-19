import { FaAngleDoubleRight } from "react-icons/fa";
import MainArticle from "./MainArticle";
import blogArticles from "../../../data/blogArticles";

function Main() {
  return (
    <article className="lg:col-span-3 mx-auto flex flex-col gap-8">
      {blogArticles.map((article) => (
        <MainArticle key={article.id} {...article} />
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
}

export default Main;
