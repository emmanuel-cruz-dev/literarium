import { useContext } from "react";
import { BlogContext } from "../../../context/BlogContext";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import BlogImg1 from "../../../assets/images/blog-detail-img.webp";
import BlogUser1 from "../../../assets/images/blog-user1.webp";
import FounderImg2 from "../../../assets/images/founder2.webp";

import FormItem from "../../../components/ui/FormItem";
import Main from "../Main/Main";
import SearchItem from "../../../components/ui/SearchItem";
import LatestPosts from "../../../components/ui/LatestPosts";
import CommentCard from "./CommentCard";
import AsideItemList from "./AsideItemList";
import {
  contentUsers,
  usersReply1,
  usersReply2,
} from "../../../data/contentUsers";
import { instagramImages } from "../../../data/instagramImages";
import { data1, data2 } from "../../../data/contentListData";
import { contentPosts } from "../../../data/contentPosts";
import StayTunedCard from "./StayTunedCard";

function Content() {
  const { isVisible, handleClick } = useContext(BlogContext);

  return (
    <section className="blog-content mt-8" id="blog-content">
      <article className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-6 text-neutral-600 font-light relative">
        {!isVisible && <Main />}
        {isVisible && (
          <article className="lg:col-span-3 mx-auto flex flex-col gap-4">
            <div className="relative">
              <img
                src={BlogImg1}
                alt="Foto de 4 personas leyendo un libro"
                width="870"
                height="375"
                loading="lazy"
              />
              <div className="background-accent__item absolute top-0 left-0 flex flex-col justify-center items-center gap-1 py-3 px-8 text-white text-4xl uppercase">
                <p>16</p>
                <p className="font-bold text-lg">May</p>
              </div>
            </div>
            <article className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-2">
              <div className="flex items-center gap-4">
                <a href="#" className="blog-content__user-image__container">
                  <img
                    src={BlogUser1}
                    alt="Foto de Anni Hollin"
                    width="74"
                    height="76"
                    loading="lazy"
                  />
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
              <img
                className="w-20 h-20"
                src={FounderImg2}
                alt="Foto de Jhony Thapya"
                width="370"
                height="370"
                loading="lazy"
              />
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
                <CommentCard {...contentUsers[2]} />
                <CommentCard {...contentUsers[1]}>
                  {usersReply2.map((reply) => (
                    <CommentCard key={reply.id} {...reply}></CommentCard>
                  ))}
                </CommentCard>
                <CommentCard {...contentUsers[0]}>
                  {usersReply1.map((reply) => (
                    <CommentCard key={reply.id} {...reply}></CommentCard>
                  ))}
                </CommentCard>
                <CommentCard {...contentUsers[3]} />
              </div>
            </article>
            <FormItem title="Leave a Reply" button="Submit" />
            <div className="flex justify-end">
              <button
                className="btn uppercase"
                onClick={() => handleClick()}
                title="Back to Main Blog"
              >
                Back to Blog
              </button>
            </div>
          </article>
        )}
        <aside className="lg:col-span-1 flex flex-col gap-8">
          <SearchItem />

          <AsideItemList title="Categories" dataArr={data1} />

          <StayTunedCard />

          <div className="flex flex-col gap-4">
            <h2 className="blog-content__aside__item-title">Latest Posts</h2>
            {contentPosts.map((post) => (
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
                    width="573"
                    height="220"
                    loading="lazy"
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
                width="1066"
                height="1600"
                loading="lazy"
              />
            </a>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Content;
