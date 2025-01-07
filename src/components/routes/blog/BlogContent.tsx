import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import BlogImg1 from "../../../assets/images/blog-detail-img.jpg";
import BlogUser1 from "../../../assets/images/blog-user1.jpg";
import FounderImg2 from "../../../assets/images/founder2.jpg";
import CommentUser1 from "../../../assets/images/comment-user1.jpg";
import CommentUser2 from "../../../assets/images/comment-user2.jpg";
import CommentUser3 from "../../../assets/images/comment-user3.jpg";

interface CommentCardProps {
  id: number;
  img: string;
  name: string;
  date: string;
  children?: React.ReactNode;
}

const users = [
  {
    id: 1,
    name: "Clara Hoffman",
    date: "June 20, 2024",
    img: CommentUser1,
  },
  {
    id: 2,
    name: "Isabelle McKenzie",
    date: "August 12, 2024",
    img: CommentUser2,
  },
  {
    id: 3,
    name: "Luca Moretti",
    date: "September 18, 2024",
    img: CommentUser3,
  },
];

const CommentCard: FC<CommentCardProps> = ({ img, name, date, children }) => {
  return (
    <article className="flex gap-6 relative">
      <button className="blog-content__btn__comment">Reply</button>
      <figure className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </figure>
      <div className="flex flex-col gap-2 uppercase">
        <h3 className="font-semibold text-[17px] text-black">{name}</h3>
        <p className="text-[13px]">{date}</p>
        <p className="normal-case">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <div className="mt-4">{children}</div>
      </div>
    </article>
  );
};

const BlogContent = () => {
  return (
    <section className="blog-content" id="blog-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 py-6 text-slate-500 font-light">
        <article className="lg:col-span-3 mx-auto flex flex-col gap-4">
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
              <div className="flex flex-col gap-1 uppercase [&>p]:text-sm">
                <h3 className="font-bold text-lg text-black">
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
            <h4 className="uppercase text-black font-bold text-[1.3rem]">
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
            <p className="blog-content__paragraph-italic bg-slate-200/40">
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
          <hr className="border-b border-slate-300" />
          <div className="flex justify-between items-center gap-4">
            <button className="blog-content__btn">
              <FaChevronLeft />
              <span>Previous Post</span>
            </button>
            <button className="blog-content__btn">
              <span>Next Post</span>
              <FaChevronRight />
            </button>
          </div>
          <div className="flex gap-4 border border-slate-300 p-4 relative">
            <div className="blog-content__social-icons">
              <ul className="[&>li]:border [&>li]:border-slate-300">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePlusG />
                  </a>
                </li>
              </ul>
            </div>
            <img className="w-20 h-20" src={FounderImg2} alt="" />
            <div>
              <h2 className="uppercase font-bold text-lg text-black">
                Jhony Thapya
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <article className="flex flex-col gap-4">
            <h2 className="uppercase font-bold text-2xl text-black">
              132 Comments
            </h2>
            <div className="flex flex-col gap-4">
              {users.map((user) => (
                <CommentCard key={user.id} {...user}></CommentCard>
              ))}
            </div>
          </article>
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
