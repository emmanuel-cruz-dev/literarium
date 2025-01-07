import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSkype,
  FaGooglePlusG,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import { InformationList } from "../../Footer";
import BlogImg1 from "../../../assets/images/blog-detail-img.jpg";
import BlogUser1 from "../../../assets/images/blog-user1.jpg";
import FounderImg2 from "../../../assets/images/founder2.jpg";
import CommentUser1 from "../../../assets/images/comment-user1.jpg";
import CommentUser2 from "../../../assets/images/comment-user2.jpg";
import CommentUser3 from "../../../assets/images/comment-user3.jpg";
import CommentUser4 from "../../../assets/images/comment-user4.jpg";
import CommentUser5 from "../../../assets/images/comment-user5.jpg";
import CommentUser6 from "../../../assets/images/comment-user6.jpg";
import CommentUser7 from "../../../assets/images/comment-user7.jpg";

interface CommentCardProps {
  id: number;
  img: string;
  name: string;
  date: string;
  children?: React.ReactNode;
}

interface AsideItemListProps {
  title: string;
  dataArr: string[];
}

interface LatestPostsProps {
  title: string;
  date: string;
  img: string;
}

type UserItem = {
  id: number;
  name: string;
  date: string;
  img: string;
};

const users: UserItem[] = [
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
  {
    id: 4,
    name: "James Green",
    date: "June 09, 2024",
    img: CommentUser7,
  },
];

const usersReply1: UserItem[] = [
  {
    id: 1,
    name: "Amelie Schneider",
    date: "June 21, 2024",
    img: CommentUser4,
  },
  {
    id: 2,
    name: "Erik Johansson",
    date: "June 22, 2024",
    img: CommentUser5,
  },
];

const usersReply2: UserItem[] = [
  {
    id: 3,
    name: "Freya Nielsen",
    date: "August 29, 2024",
    img: CommentUser6,
  },
];

const data1 = [
  "Photoshop",
  "Graphic Design",
  "Mobile Development",
  "Illustration",
  "Video Editing",
  "UX Design",
  "3D Modeling",
  "Animation Graphics",
];

const data2 = [
  "Creative Workflow Tips",
  "Breaking the Rules of Design",
  "From Concept to Creation",
  "Inspiration from the Masters",
  "The Art of Minimalism",
  "Building Better Portfolio",
  "Color Psychology in Media",
  "Mastering the Creative Process",
];

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    date: "07 January, 2025",
    img: CommentUser1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    date: "30 December, 2024",
    img: CommentUser2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    date: "25 December, 2024",
    img: CommentUser3,
  },
];

const instagramImages = [
  "https://images.freejpg.com.ar/900/2512/woman-reading-a-book-in-bed-before-sleeping-F100030927.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/ba/86/b5/and-even-more-books.jpg?w=900&h=500&s=1",
  "https://img.freepik.com/fotos-premium/mujer-leyendo-libro-biblioteca_123211-3375.jpg",
  "https://assets.weforum.org/article/image/RM56CoG0a4-UPVNMyAkMKRGkCBkJiIwH5wOsupmChbE.jpg",
  "https://image.freepik.com/foto-gratis/hombre-negocios-sentado-mesa-leyendo-libro_1423-256.jpg",
  "https://media.istockphoto.com/id/1402835350/photo/pensive-relaxed-african-american-woman-reading-a-book-at-home-drinking-coffee-sitting-on-the.jpg?s=612x612&w=0&k=20&c=aw9R68ENkPNqEQqQKcPqIlwAefRSQnymCifEjKd-4aE=",
  "https://cdn.zmescience.com/wp-content/uploads/2015/04/Girl-reading-book-.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/96/40/00/the-new-fiction-table.jpg?w=900&h=500&s=1",
  "https://thumbs.dreamstime.com/b/old-man-sitting-home-reading-16618123.jpg",
];

const AsideItemList: FC<AsideItemListProps> = ({ title, dataArr }) => {
  return (
    <article className="blog-content__aside__item-container flex flex-col gap-6">
      <h2 className="blog-content__aside__item-title">{title}</h2>
      <InformationList data={dataArr} />
    </article>
  );
};

const CommentCard: FC<CommentCardProps> = ({ img, name, date, children }) => {
  return (
    <article className="flex gap-6 relative">
      <button className="blog-content__btn__comment hidden absolute md:block">
        Reply
      </button>
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
        <button className="blog-content__btn__comment md:hidden">Reply</button>
        <div className="mt-4">{children}</div>
      </div>
    </article>
  );
};

const LatestPosts: FC<LatestPostsProps> = ({ title, date, img }) => {
  return (
    <article className="flex items-center gap-4 pb-4 border-b border-slate-300">
      <img className="w-16 h-16 rounded-full" src={img} alt={title} />
      <div className="uppercase text-sm">
        <h3 className="font-bold text-black">{title}</h3>
        <p>{date}</p>
      </div>
    </article>
  );
};

const BlogContent = () => {
  return (
    <section className="blog-content mt-8" id="blog-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-6 text-slate-500 font-light">
        <article className="lg:col-span-3 mx-auto flex flex-col gap-4">
          <div className="relative">
            <img src={BlogImg1} alt="" />
            <div className="background-accent__item absolute top-0 left-0 flex flex-col justify-center items-center gap-1 py-3 px-8 text-white text-4xl uppercase">
              <p>16</p>
              <p className="font-bold text-lg">May</p>
            </div>
          </div>
          <article className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-2">
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
              <CommentCard {...users[2]} />
              <CommentCard {...users[1]}>
                {usersReply2.map((reply) => (
                  <CommentCard key={reply.id} {...reply}></CommentCard>
                ))}
              </CommentCard>
              <CommentCard {...users[0]}>
                {usersReply1.map((reply) => (
                  <CommentCard key={reply.id} {...reply}></CommentCard>
                ))}
              </CommentCard>
              <CommentCard {...users[3]} />
            </div>
          </article>
          <article className="flex flex-col gap-4 mb-12">
            <h2 className="uppercase font-semibold text-2xl text-black">
              Leave a Reply
            </h2>
            <form className="blog-content__form flex flex-col gap-6" action="">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Phone Number"
                />
              </div>
              <textarea name="" id=""></textarea>
              <button className="w-fit py-3 px-6 text-white text-lg background-accent__item uppercase font-bold hover:bg-black transition-colors duration-300 ease-in-out">
                Submit
              </button>
            </form>
          </article>
        </article>
        <aside className="lg:col-span-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Search</h2>
            <div className="flex items-center border border-slate-300 py-2 px-3">
              <input
                className="focus:outline-none w-11/12"
                type="text"
                placeholder="Enter Keyword"
              />
              <a className="w-1/12" href="#">
                <FaSearch />
              </a>
            </div>
          </div>

          <AsideItemList title="Categories" dataArr={data1} />

          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Stay Tuned</h2>
            <div className="grid grid-cols-3 items-center border border-slate-300 overflow-hidden">
              <input
                className="col-span-2 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Subscribe Us"
              />
              <button className="w-full h-full text-white background-accent__item uppercase font-bold hover:bg-black transition-colors duration-300 ease-in-out">
                Submit
              </button>
            </div>
            <div>
              <ul className="blog-content__aside__unordered-list flex justify-between gap-4 text-lg">
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
                <li>
                  <a href="#">
                    <FaSkype />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Latest Posts</h2>
            {posts.map((post) => (
              <LatestPosts key={post.id} {...post} />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Instagram</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  className="background-accent__item aspect-square"
                  href="#"
                >
                  <img
                    className="w-full h-full object-cover hover:opacity-40 transition-opacity duration-300 ease-in-out"
                    src={image}
                    alt="People reading books"
                  />
                </a>
              ))}
            </div>
          </div>

          <AsideItemList title="Archive" dataArr={data2} />

          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Highlights</h2>
            <a className="w-full overflow-hidden aspect-square" href="#">
              <img
                className="hover:scale-110 transition-transform duration-300 ease-in-out"
                src="https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Books-make-you-someone-else-ad-4.jpg?resize=1066%2C1600&ssl=1"
                alt="Advertisement girl reading a book"
              />
            </a>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default BlogContent;
