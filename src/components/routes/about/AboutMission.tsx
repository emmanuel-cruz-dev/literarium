import { FC, useState } from "react";
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

interface MissionRenderProps {
  arr: Item[];
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
    text: "Your support allows us to continue promoting culture and reading. With each purchase, you help us to continue expanding our catalogue and offering unforgettable literary experiences. In addition, we are committed to educational causes, allocating part of our profits to initiatives that promote access to reading for all.",
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
              className={`text-sm lg:text-base px-2 lg:px-4 uppercase font-bold text-center ${
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

const AboutMission = () => {
  return (
    <section className="about-mission" id="about-mission">
      <article className="w-11/12 mx-auto py-12">
        <div className="leading-relaxed text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <MissionRender arr={items} />
          <div>
            <details open>
              <summary className="flex justify-between items-center gap-4">
                Our Mission and Vision
                <span className="decrement-symbol background-accent__item hidden items-center pb-[9px] justify-center text-white font-bold text-4xl w-10 h-10">
                  –
                </span>
                <span className="plus-symbol background-accent__item flex items-center pb-2 justify-center text-white font-bold text-4xl w-10 h-10">
                  +
                </span>
              </summary>

              <div className={`border border-gray-200 p-4 `}>
                <p>
                  Our Mission and Vision cliche reprehenderit, enim eiusmod high
                  life accusamus terry richardson ad squid. 3 wolf moon officia
                  aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </div>
            </details>

            <details>
              <summary className="flex justify-between items-center gap-4">
                24 Hours full video support
                <span className="decrement-symbol background-accent__item hidden items-center pb-[9px] justify-center text-white font-bold text-4xl w-10 h-10">
                  –
                </span>
                <span className="plus-symbol background-accent__item flex items-center pb-2 justify-center text-white font-bold text-4xl w-10 h-10">
                  +
                </span>
              </summary>

              <div className="border border-gray-200 p-4">
                <p>
                  24 Hours full video pariatur cliche reprehenderit, enim
                  eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food
                  truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </p>
              </div>
            </details>

            <details>
              <summary className="flex justify-between items-center gap-4">
                User-friendly Design
                <span className="decrement-symbol hidden background-accent__item items-center pb-[9px] justify-center text-white font-bold text-4xl w-10 h-10">
                  –
                </span>
                <span className="plus-symbol background-accent__item flex items-center pb-2 justify-center text-white font-bold text-4xl w-10 h-10">
                  +
                </span>
              </summary>

              <div className="border border-gray-200 p-4">
                <p>
                  User friendly design pariatur cliche reprehenderit, enim
                  eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food
                  truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                  tempor, sunt aliqua put a bird on it squid single-origin
                  coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </p>
              </div>
            </details>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMission;
