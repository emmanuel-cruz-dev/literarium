import { FC, useState } from "react";
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
import BlogMain from "./BlogMain";

interface CommentCardProps {
  id: number;
  img: string;
  name: string;
  date: string;
  comment: string;
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

interface FormItemProps {
  title: string;
  button: string;
}

type UserItem = {
  id: number;
  name: string;
  date: string;
  comment: string;
  img: string;
};

const users: UserItem[] = [
  {
    id: 1,
    name: "Clara Hoffman",
    date: "June 20, 2024",
    comment:
      "I completely agree! Digital formats have made reading more accessible, but there's nothing like holding a physical book in your hands.",
    img: CommentUser1,
  },
  {
    id: 2,
    name: "Isabelle McKenzie",
    date: "August 12, 2024",
    comment:
      "This article really resonated with me. I've been exploring global literature recently, and it's opened my eyes to so many new perspectives!",
    img: CommentUser2,
  },
  {
    id: 3,
    name: "Luca Moretti",
    date: "September 18, 2024",
    comment:
      "The diversity in self-published books is amazing, but sometimes it's hard to find quality stories. Any tips on good curation platforms?",
    img: CommentUser3,
  },
  {
    id: 4,
    name: "James Green",
    date: "June 09, 2024",
    comment:
      "This was such a thoughtful piece. I'd love to hear more about your favorite global authors and their impact on literature.",
    img: CommentUser7,
  },
];

const usersReply1: UserItem[] = [
  {
    id: 1,
    name: "Amelie Schneider",
    date: "June 21, 2024",
    comment:
      "I hadn't thought about how algorithms are shaping what we read. It's fascinating and a bit scary. Excellent read!",
    img: CommentUser4,
  },
  {
    id: 2,
    name: "Erik Johansson",
    date: "June 22, 2024",
    comment:
      "Thank you for highlighting the impact of self-publishing. As an aspiring author, it's encouraging to see these changes.",
    img: CommentUser5,
  },
];

const usersReply2: UserItem[] = [
  {
    id: 3,
    name: "Freya Nielsen",
    date: "August 29, 2024",
    comment:
      "Beautifully written! Stories truly connect us all, no matter the format. I hope printed books never disappear completely",
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
    title: "The Power of Storytelling",
    date: "07 January, 2025",
    img: CommentUser1,
  },
  {
    id: 2,
    title: "Hidden Gems of Literature",
    date: "30 December, 2024",
    img: CommentUser2,
  },
  {
    id: 3,
    title: "From Literature to Life",
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

export const AsideItemList: FC<AsideItemListProps> = ({ title, dataArr }) => {
  return (
    <article className="blog-content__aside__item-container flex flex-col gap-6">
      <h2 className="blog-content__aside__item-title">{title}</h2>
      <InformationList data={dataArr} />
    </article>
  );
};

const CommentCard: FC<CommentCardProps> = ({
  img,
  name,
  date,
  comment,
  children,
}) => {
  return (
    <article className="flex flex-row gap-6 relative">
      <button className="blog-content__btn__comment hidden absolute md:block">
        Reply
      </button>
      <a
        href="#"
        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
      >
        <img className="w-full h-full object-cover" src={img} alt="" />
      </a>
      <div className="flex flex-col gap-2 uppercase">
        <a href="#">
          <h3 className="font-semibold text-[17px] text-black">{name}</h3>
        </a>
        <a href="#" className="text-[13px]">
          {date}
        </a>
        <p className="normal-case">{comment}</p>
        <button className="blog-content__btn__comment md:hidden">Reply</button>
        <div className="mt-4">{children}</div>
      </div>
    </article>
  );
};

export const SearchItem = () => {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="blog-content__aside__item-title">Search</h2>
      <div className="flex items-center border border-slate-300 py-2 px-3 text-inherit">
        <input
          name="search"
          id="search"
          className="focus:outline-none w-11/12 bg-inherit"
          type="text"
          placeholder="Enter Keyword"
        />
        <a className="w-1/12" href="#">
          <FaSearch />
        </a>
      </div>
    </article>
  );
};

export const FormItem: FC<FormItemProps> = ({ title, button }) => {
  return (
    <article className="flex flex-col gap-4 mb-12">
      <h2 className="uppercase font-semibold text-2xl text-black">{title}</h2>
      <form className="blog-content__form flex flex-col gap-6" action="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="off"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            placeholder="Phone Number"
          />
        </div>
        <textarea name="form__message" id="form__message"></textarea>
        <button className="w-fit py-3 px-6 text-white text-lg background-accent__item uppercase font-bold hover:bg-black transition-colors duration-300 ease-in-out">
          {button}
        </button>
      </form>
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

export const CommentContentReview: FC = () => {
  return (
    <>
      <CommentCard {...users[2]} />
      <CommentCard {...users[1]} />
    </>
  );
};

const BlogContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="blog-content mt-8" id="blog-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-6 text-neutral-600 font-light relative">
        <button
          className="btn absolute -top-7 left-1/3"
          onClick={() => setIsVisible(!isVisible)}
        >
          Click
        </button>
        {!isVisible && <BlogMain />}
        {isVisible && (
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
                <a href="#" className="blog-content__user-image__container">
                  <img src={BlogUser1} alt="" />
                </a>
                <div className="flex flex-col gap-1 uppercase [&>p]:text-sm">
                  <h3 className="font-bold text-lg text-black">
                    Anni Hollin,{" "}
                    <span className="text__accent-color">Author</span>
                  </h3>
                  <p>Professor of Literature</p>
                </div>
              </div>
              <div className="blog-content__likes-comments flex gap-4 [&>a]:flex [&>a]:items-center [&>a]:gap-2">
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
                Where I'm Reading From: Exploring the Changing World of Books
              </h4>
              <p>
                The world of books is undergoing a profound transformation,
                reshaping not only how we read but also how we think about
                literature. As a professor of literature and lifelong lover of
                the written word, I have spent years immersed in the study of
                stories, from the classics that defined eras to contemporary
                works that challenge traditional norms. Today, I find myself
                reflecting on how technology, culture, and global connectivity
                are altering our relationship with books.
              </p>
              <p>
                One of the most noticeable changes is the shift from physical
                books to digital formats. E-readers and audiobooks have opened
                up new ways to engage with stories, making literature more
                accessible than ever. For many, this evolution is a gift,
                breaking down barriers for those who previously struggled to
                find time or resources to enjoy reading. However, this change
                also raises questions about the future of printed books. Will
                they become relics of the past, or will their tactile nature
                preserve their place in our hearts and homes?
              </p>
              <p className="blog-content__paragraph-italic bg-slate-200/40">
                Another fascinating trend is the democratization of publishing.
                In the past, authors often faced immense hurdles to bring their
                work to light. Today, self-publishing platforms and online
                communities have empowered countless voices, allowing stories to
                reach audiences directly. This diversity has enriched the
                literary landscape, offering perspectives that were once
                marginalized or unheard.
              </p>
              <p>
                Finally, literature is becoming more global. Readers can now
                discover works from different cultures and languages with
                unprecedented ease, fostering greater empathy and understanding.
                As we navigate this changing world of books, one thing remains
                clear: stories are as vital as ever.
              </p>
              <p>
                In this era of transformation, books continue to serve as
                mirrors, windows, and escape routes, connecting us to ourselves
                and the world around us. The form may change, but the power of
                storytelling endures.
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
                  Great insights! I love audio books for busy days, but I still
                  enjoy my cozy nights with a hardcover book. I’m excited to see
                  how technology will continue to shape the way we read and
                  interact with literature.
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
            <FormItem title="Leave a Reply" button="Submit" />
          </article>
        )}
        <aside className="lg:col-span-1 flex flex-col gap-8">
          <SearchItem />

          <AsideItemList title="Categories" dataArr={data1} />

          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Stay Tuned</h2>
            <div className="grid grid-cols-3 items-center border border-slate-300 overflow-hidden">
              <input
                name="subscribe"
                id="subscribe"
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
