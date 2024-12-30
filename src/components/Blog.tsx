import BlogImage1 from "../assets/images/blog1.jpg";
import BlogImage2 from "../assets/images/blog2.jpg";
import BlogImage3 from "../assets/images/blog3.jpg";
import BlogImage4 from "../assets/images/blog4.jpg";
import { AiOutlineDoubleRight } from "react-icons/ai";

const posts = [
  {
    id: 1,
    author: "Cartel",
    title: "Book Lovers",
    description:
      "This research project explores the fascinating world of artists' novels, analysing their cultural relevance and impact today.",
    image: BlogImage1,
    date: 15,
    month: "July",
  },
  {
    id: 2,
    author: "Jack Howard",
    title: "The Indie View",
    description:
      "A remarkable work that has captivated readers with its narrative and innovative approach, becoming a benchmark in Indian literature.",
    image: BlogImage2,
    date: 10,
    month: "August",
  },
  {
    id: 3,
    author: "Gary Young",
    title: "Modern E-Books",
    description:
      "A revolutionary way to buy books that has transformed the reading experience, making access to digital titles easier than ever.",
    image: BlogImage3,
    date: 21,
    month: "September",
  },
  {
    id: 4,
    author: "Julia ",
    title: "Learn With Joy",
    description:
      "An educational approach designed to combine accessibility and fun, offering a platform that makes learning a pleasant experience.",
    image: BlogImage4,
    date: 26,
    month: "October",
  },
];

interface BlogCardProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  date: number;
  month: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  author,
  title,
  description,
  image,
  date,
  month,
}) => {
  return (
    <article
      key={id}
      className="blog__card-article flex flex-col md:flex-row md:w-fit mx-auto items-center gap-6 box-shadow__item bg-gray-100/60 hover:bg-white transition-colors duration-300 ease-in-out"
    >
      <div className="relative w-full h-96 md:h-full">
        <img className="h-full object-cover" src={image} alt="" />
        <div className="blog__card-article__date absolute bottom-0 right-0 left-44 transition-all duration-300 text-white text-center">
          <p className="flex flex-col">
            <span className="bg-slate-100/70 text-slate-600 text-4xl">
              {date}
            </span>
            <span className="background-accent__item py-2">{month}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-6">
        <p className="text-slate-400">Posted by {author}</p>
        <h2 className="blog__card-title">{title}</h2>
        <p className="md:w-64 text-slate-400">{description}</p>
        <a
          className="blog__card-anchor flex items-center gap-2 uppercase font-semibold"
          href="#"
        >
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
            We're breaking new ground in online book selling. We believe that
            education and access to books are basic human rights. That's why
            books sold on BetterWorldBooks.com help fund high-impact literacy
            projects in the United States and around the world.
          </p>
        </div>
        <article className="py-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard {...post} />
            ))}
          </div>
        </article>
      </article>
    </section>
  );
};

export default Blog;
