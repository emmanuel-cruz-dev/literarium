import Image from "../assets/images/blog.jpg";
import { AiOutlineDoubleRight } from "react-icons/ai";

const BlogCard = () => {
  return (
    <article className="flex items-center gap-4 box-shadow__item bg-slate-100 hover:bg-white transition-colors duration-300 ease-in-out">
      <div className="relative">
        <img src={Image} alt="" />
        <div className="absolute bottom-0 right-0 left-44 hover:left-0 transition-all duration-300 text-white text-center">
          <p className="flex flex-col">
            <span className="bg-slate-100/70 text-slate-600 text-4xl">15</span>
            <span className="background-accent__item py-2">August</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-slate-400">Posted by Cartel</p>
        <h2 className="blog__card-title">Book Lovers</h2>
        <p className="w-64 text-slate-400">
          The Book Lovers is a research project on the phenomenon of artist's
          novels avaible today.
        </p>
        <a className="flex items-center gap-2 uppercase font-semibold" href="#">
          See More
          <AiOutlineDoubleRight />
        </a>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="uppercase font-bold text-3xl section__title">
            The Book Guide <span className="text__accent-color">online</span>{" "}
            book store
          </h2>
          <p>
            We’re breaking new ground in online bookselling. We believe that
            education and access to books are basic human rights. That's why
            books sold on BetterWorldBooks.com help fund high-impact literacy
            projects in the United States and around the world.
          </p>
        </div>
        <article className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </article>
      </article>
    </section>
  );
};

export default Blog;
