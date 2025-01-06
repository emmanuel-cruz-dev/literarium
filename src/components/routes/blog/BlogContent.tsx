import BlogImg1 from "../../../assets/images/blog-detail-img.jpg";
import BlogUser1 from "../../../assets/images/blog-user1.jpg";

const BlogContent = () => {
  return (
    <section className="blog-content" id="blog-content">
      <article className="w-11/12 mx-auto py-12">
        <div className="relative">
          <img src={BlogImg1} alt="" />
          <div className="background-accent__item absolute top-0 left-0 flex flex-col justify-center items-center gap-1 py-3 px-8 text-white text-4xl uppercase">
            <p>16</p>
            <p className="font-bold text-lg">May</p>
          </div>
        </div>
        <article>
          <div>
            <figure className="rounded-full overflow-hidden w-20 h-20 border-4 border-cyan-400">
              <img src={BlogUser1} alt="" />
            </figure>
            <h3 className="uppercase font-bold text-xl">
              Anni Hollin, <span className="text__accent-color">Author</span>
            </h3>
          </div>
        </article>
      </article>
    </section>
  );
};

export default BlogContent;
