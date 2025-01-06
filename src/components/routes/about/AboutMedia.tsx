import CounterBanner from "../../../components/CounterBanner";
import VideoImg from "../../../assets/images/video-bg2.jpg";
import { FaPlay } from "react-icons/fa";

const items = [
  {
    number: 34,
    title: "Years of Excellence",
  },
  {
    number: 10000,
    title: "Happy Customers",
  },
  {
    number: 19,
    title: "Partner Stores Worldwide",
  },
  {
    number: 500,
    title: "Books Donated Every Year",
  },
];

const AboutMedia = () => {
  return (
    <>
      <section className="about-media bg-black/95 text-white" id="about-media">
        <article className="w-11/12 mx-auto py-16" id="main-cards">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div className="relative mx-auto w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={VideoImg}
                alt=""
              />
              <a
                href="#"
                className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 bg-black/50 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out"
              >
                <span className="text-3xl uppercase font-bold rounded-full bg-white/20 p-5 border border-white/50">
                  <FaPlay />
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="uppercase font-bold text-2xl">
                Our Literary Journey Through Time
              </h2>
              <p>
                Step into our world where stories come alive. From humble
                beginnings as a neighborhood bookstore to becoming a cultural
                cornerstone, our growth reflects our passion for literature and
                community. Watch as we share the moments that shaped us, the
                authors who inspire us, and our vision for fostering the next
                generation of readers. Through decades of connecting readers
                with life-changing books, we've built more than a bookstore -
                we've created a literary home for our community.
              </p>
              <button className="w-fit py-3 px-6 text-lg background-accent__item uppercase font-bold hover:bg-white hover:text-gray-900 transition-colors duration-300 ease-in-out">
                See More
              </button>
            </div>
          </div>
        </article>
      </section>
      <CounterBanner arr={items} />
    </>
  );
};

export default AboutMedia;
