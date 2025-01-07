import { FaHeart } from "react-icons/fa";
import BlogImg1 from "../../../assets/images/blog-detail-img.jpg";
import BlogUser1 from "../../../assets/images/blog-user1.jpg";

const BlogContent = () => {
  return (
    <section className="blog-content" id="blog-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-6 text-slate-500 font-light">
        <article className="lg:col-span-2 mx-auto flex flex-col gap-4">
          <div className="relative">
            <img src={BlogImg1} alt="" />
            <div className="background-accent__item absolute top-0 left-0 flex flex-col justify-center items-center gap-1 py-3 px-8 text-white text-4xl uppercase">
              <p>16</p>
              <p className="font-bold text-lg">May</p>
            </div>
          </div>
          <article className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 ">
            <div className="flex items-center gap-4">
              <figure className="blog-content__user-image__container">
                <img src={BlogUser1} alt="" />
              </figure>
              <div className="uppercase [&>p]:text-sm">
                <h3 className="font-bold text-xl text-black">
                  Anni Hollin,{" "}
                  <span className="text__accent-color">Author</span>
                </h3>
                <p>Books Designer</p>
              </div>
            </div>
            <div className="flex gap-4 [&>a]:flex [&>a]:items-center [&>a]:gap-2">
              <a href="#">
                <FaHeart />
                208 likes
              </a>
              <a href="#">
                <FaHeart />
                71 comments
              </a>
            </div>
          </article>
          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-black font-bold text-[1.4rem]">
              Where I'm Reading From: The Changing World of Books Now
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <p className="italic bg-slate-200/40 px-6 py-8 border-l-4 border-cyan-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </article>
        <aside className="lg:col-span-1 flex flex-col gap-4">
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
