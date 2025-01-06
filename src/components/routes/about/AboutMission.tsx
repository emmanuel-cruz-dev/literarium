import { FC, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import MissionImg1 from "../../../assets/images/mission-img1.jpg";
import MissionImg2 from "../../../assets/images/mission-img2.jpg";
import MissionImg3 from "../../../assets/images/mission-img3.jpg";
import MissionImg4 from "../../../assets/images/mission-img4.jpg";

interface Item {
  id: number;
  title: string;
  img: string;
  text: string;
}

interface DetailsItem {
  id: number;
  title: string;
  text: string;
}

interface MissionRenderProps {
  arr: Item[];
}

interface DetailsItemProps {
  id: number;
  title: string;
  text: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Info",
    img: MissionImg1,
    text: "At Literarium, we believe in the transformative power of books. Our goal is to provide access to a wide variety of titles that inspire, educate, and entertain. From classics to new releases, we offer books in physical and digital formats, as well as home delivery so that reading is always within your reach.",
  },
  {
    id: 2,
    title: "Why Us",
    img: MissionImg2,
    text: "Choosing us means trusting a bookstore committed to quality and a passion for reading. We have an expert team that carefully selects each title to ensure that you always find what you are looking for. In addition, our flexible delivery options and competitive prices set us apart in the market.",
  },
  {
    id: 3,
    title: "Involve",
    img: MissionImg3,
    text: "Join our community of passionate readers. At Literarium, we organize literary events, book clubs, and workshops to foster a love of books. We want you to be part of a network that shares stories, ideas, and experiences, helping us strengthen the bond between readers and authors.",
  },
  {
    id: 4,
    title: "Support",
    img: MissionImg4,
    text: "Your support allows us to continue promoting culture and reading. With each purchase, you help us to continue expanding our catalogue and offering literary experiences. In addition, we are committed to educational causes, allocating part of our profits to initiatives that promote access to reading for all.",
  },
];

const detailsItems: DetailsItem[] = [
  {
    id: 1,
    title: "Our Mission and Vision",
    text: "Our mission is to bring the magic of reading to every corner, promoting knowledge and creativity. Our vision is to become a reference for readers of all ages, offering an inclusive space where stories come to life. We believe in the transformative power of books and the positive impact they generate by sharing knowledge, ideas and emotions with the world.",
  },
  {
    id: 2,
    title: "24/7 Video Support",
    text: "We're here for you at all times. Our 24/7 video support ensures you get immediate help to resolve questions, explore features, and get the most out of our services. Whether you need guidance on purchasing, shipping, or accessing eBooks, our team is ready to assist you quickly and effectively, providing you with a smooth and reliable experience.",
  },
  {
    id: 3,
    title: "User-Friendly Design",
    text: "Enjoy a browsing experience designed with you in mind. Our platform combines functionality and aesthetics to offer an intuitive and pleasant environment. Easily find your favorite books, explore our recommendations and make purchases without complications. With an accessible and modern design, we guarantee that every user can enjoy our bookstore without technological barriers.",
  },
];

const MissionRender: FC<MissionRenderProps> = ({ arr }) => {
  const [active, setActive] = useState(1);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <article className="flex flex-col gap-4">
      <div className="relative">
        <img src={arr[active - 1].img} alt="mission" />
        <div className="flex gap-4 justify-center items-end absolute bottom-0 left-0 w-full">
          {arr.map((item) => (
            <button
              onClick={() => handleClick(item.id)}
              className={`text-sm lg:text-base px-2 lg:px-6 uppercase font-bold text-center ${
                active === item.id
                  ? "about-mission__title-btn py-[10px] bg-slate-100"
                  : "bg-slate-100/70 py-2"
              }`}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <p>{arr[active - 1].text}</p>
    </article>
  );
};

const DetailsItem: FC<DetailsItemProps> = ({ title, text, id }) => {
  return (
    <details key={id}>
      <summary className="flex justify-between items-center gap-4">
        {title}
        <span className="background-accent__item flex items-center justify-center text-white text-3xl w-10 h-10">
          <AiOutlineMinus className="decrement-symbol hidden" />
          <AiOutlinePlus className="plus-symbol" />
        </span>
      </summary>

      <div
        className={`border border-gray-200 p-4 about-mission__summary-content`}
      >
        <p>{text}</p>
      </div>
    </details>
  );
};

const AboutMission = () => {
  return (
    <section className="about-mission" id="about-mission">
      <article className="w-11/12 mx-auto py-12">
        <div className="leading-relaxed text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div>
            {detailsItems.map((item) => (
              <DetailsItem key={item.id} {...item} />
            ))}
          </div>
          <MissionRender arr={items} />
        </div>
      </article>
    </section>
  );
};

export default AboutMission;
