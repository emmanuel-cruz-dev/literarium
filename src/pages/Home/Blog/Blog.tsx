import blogPosts from "../../../data/blogPosts";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <section className="blog" id="blog">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="section__title">
            Explore the <span className="text__accent-color">world</span> of
            books and reading
          </h2>
          <p>
            Discover inspiring articles on reading trends, innovation in the
            publishing industry, and resources to further enjoy the exciting
            world of books.
          </p>
        </div>
        <article className="py-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </article>
      </article>
    </section>
  );
}

export default Blog;
