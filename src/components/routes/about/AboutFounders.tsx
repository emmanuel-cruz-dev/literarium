import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import FounderImg1 from "../../../assets/images/founder1.jpg";
import FounderImg2 from "../../../assets/images/founder2.jpg";
import FounderImg3 from "../../../assets/images/founder3.jpg";

interface Founder {
  id: number;
  name: string;
  title: string;
  img: string;
}

interface FounderCardProps {
  name: string;
  title: string;
  img: string;
}

const members: Founder[] = [
  {
    id: 1,
    name: "Christina Noto",
    title: "CEO",
    img: FounderImg1,
  },
  {
    id: 2,
    name: "Allen Jack",
    title: "CMO",
    img: FounderImg2,
  },
  {
    id: 3,
    name: "Sarah Marlin",
    title: "CTO",
    img: FounderImg3,
  },
];

const FounderCard: FC<FounderCardProps> = ({ name, title, img }) => {
  return (
    <article className="about-founders__card">
      <figure>
        <img className="w-full h-full" src={img} alt="" />
      </figure>
      <div className="about-founders__card__info">
        <h2 className="uppercase text-xl font-bold">{name}</h2>
        <h3>{title}</h3>
        <ul className="about-founders__card__social-icons text-lg">
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
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

const AboutFounders = () => {
  return (
    <section className="about-founders bg-neutral-200" id="about-founders">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="section__title">
            Meet <span className="text__accent-color">our</span> Founders
          </h2>
          <p>
            Meet the visionary minds behind our bookstore, passionate about
            literature, committed to the community and dedicated to offering
            readers a unique space to discover extraordinary stories.
          </p>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 py-6">
          {members.map((member) => (
            <FounderCard key={member.id} {...member} />
          ))}
        </article>
      </article>
    </section>
  );
};

export default AboutFounders;
