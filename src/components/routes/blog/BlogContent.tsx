import BlogImg1 from "../../../assets/images/blog-detail-img.jpg";
import BlogUser1 from "../../../assets/images/blog-user1.jpg";

const BlogContent = () => {
  return (
    <section className="blog-content" id="blog-content">
      <article className="w-11/12 mx-auto grid grid-cols-3 gap-10 py-6">
        <article className="col-span-2 mx-auto flex flex-col gap-4">
          <div className="relative">
            <img src={BlogImg1} alt="" />
            <div className="background-accent__item absolute top-0 left-0 flex flex-col justify-center items-center gap-1 py-3 px-8 text-white text-4xl uppercase">
              <p>16</p>
              <p className="font-bold text-lg">May</p>
            </div>
          </div>
          <article className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <figure className="rounded-full overflow-hidden w-20 h-20 border-4 border-cyan-400">
                <img src={BlogUser1} alt="" />
              </figure>
              <div>
                <h3 className="uppercase font-bold text-xl">
                  Anni Hollin,{" "}
                  <span className="text__accent-color">Author</span>
                </h3>
                <p>Books Designer</p>
              </div>
            </div>
            <div className="flex gap-4">
              <p>208 likes</p>
              <p>71 comments</p>
            </div>
          </article>
        </article>
        <aside className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase font-bold text-2xl">Books Designer</h2>
            <p>
              Books Designer is a creative and innovative business that offers
              bespoke design services for books, magazines, and other printed
              materials. Our team of experts works closely with authors to
              create unique and visually stunning designs that enhance the
              reading experience. Whether you're a seasoned designer or just
              starting out, we're here to help you bring your vision to life.
            </p>
            <button className="w-fit py-3 px-6 text-lg background-accent__item uppercase font-bold hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default BlogContent;
