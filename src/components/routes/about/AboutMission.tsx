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
    text: "Info id1 perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 2,
    title: "Why Us",
    img: MissionImg2,
    text: "Why Us id2 perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 3,
    title: "Involve",
    img: MissionImg3,
    text: "Involve id3 perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 4,
    title: "Support",
    img: MissionImg4,
    text: "Suppor id4 perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
