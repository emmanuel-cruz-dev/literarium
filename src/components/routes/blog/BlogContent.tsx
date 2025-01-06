import BlogImg1 from "../../../assets/images/blog-detail-img.jpg";

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
      </article>
    </section>
  );
};

export default BlogContent;
