import { FC } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { DetailsItemProps } from "types/types";

const DetailsItem: FC<DetailsItemProps> = ({ title, text, id }) => {
  const handleClick = (index: number) => {
    document
      .querySelector(`.about-mission__accordion-block:nth-child(${1})`)
      ?.classList.add("active-item");

    document
      .querySelectorAll(".about-mission__accordion-block")
      .forEach((item) => {
        item.classList.remove("active-item");
      });

    document
      .querySelector(`.about-mission__accordion-block:nth-child(${index})`)
      ?.classList.add("active-item");
  };

  return (
    <div
      className={`${
        id === 1 ? "active-item" : ""
      } about-mission__accordion-block`}
      key={id}
    >
      <h2
        onClick={() => handleClick(id)}
        className="about-mission__accordion-title flex justify-between items-center gap-4"
      >
        {title}
        <span className="background-accent__item flex items-center justify-center text-white text-3xl w-10 h-10">
          <AiOutlineMinus className={`decrement-symbol hidden`} />
          <AiOutlinePlus className={`plus-symbol`} />
        </span>
      </h2>

      <div className={`about-mission__accordion-content`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DetailsItem;
