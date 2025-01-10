import MainBlogWriter1 from "../../../assets/images/main-blog-writer1.jpg";
import MainBlogImg1 from "../../../assets/images/main-blog-img1.jpg";

const BlogMainArticle = () => {
  return (
    <article>
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
      <div>
        <img src={MainBlogImg1} alt="" />
      </div>
    </article>
  );
};

const BlogMain = () => {
  return (
    <article className="lg:col-span-3 mx-auto flex flex-col gap-4">
      <h2>blog</h2>
      <BlogMainArticle />
    </article>
  );
};

export default BlogMain;
