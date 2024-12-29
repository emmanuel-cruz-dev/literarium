import Image from "../assets/images/blog.jpg";

const BlogCard = () => {
  return (
    <article className="flex gap-4">
      <figure className="w-96">
        <img className="w-full h-full object-cover" src={Image} alt="" />
      </figure>
      <div>
        <p>Posted by Cartel</p>
        <h2 className="uppercase blog__card-title">Book Lovers</h2>
        <p>
          The Book Lovers is a research project on the phenomenon of artist's
          novels avaible today.
        </p>
        <a className="uppercase" href="#">
          See More
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
