import { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import { FounderCardProps } from "types/types";

const FounderCard: FC<FounderCardProps> = ({ name, title, img }) => {
  return (
    <article className="about-founders__card">
      <figure>
        <img
          className="w-full h-full"
          src={img}
          alt={`Foto de ${name}`}
          width="370"
          height="370"
          loading="lazy"
        />
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

export default FounderCard;
