import { FaSearch, FaShareAlt, FaHeart } from "react-icons/fa";
import MainBlogWriter1 from "../../../assets/images/main-blog-writer1.jpg";
import MainBlogImg1 from "../../../assets/images/main-blog-img1.jpg";

const BlogMainArticle = () => {
  return (
    <article className="grid grid-cols-5">
      <div>
        <div>
          <figure>
            <img src={MainBlogWriter1} alt="" />
          </figure>
          <div>
            <p>Writen By</p>
            <h2>Belly</h2>
          </div>
        </div>
        <div>
          <p>
            26
            <span>th</span>
          </p>
          <p>August 2024</p>
        </div>
      </div>

      <div className="col-span-4">
        <div>
          <img src={MainBlogImg1} alt="" />
          <div>
            <FaSearch />
            <FaShareAlt />
            <FaHeart />
          </div>
        </div>
        <h2>NerdCon Stories, Day Two</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem
          quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <button>Read More</button>
      </div>
    </article>
  );
};

const BlogMain = () => {
  return (
    <article className="lg:col-span-3 mx-auto flex flex-col gap-4">
      <BlogMainArticle />
    </article>
  );
};

export default BlogMain;
