import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GiftCardProps } from "../../../types/types";

const GiftCard: FC<GiftCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <article className="gift__card-body flex items-center lg:w-[56%]">
      <div className="gift__card-item flex flex-col gap-2 p-6">
        <div className="flex items-center gap-2 text-xl uppercase font-bold">
          <span className="text-2xl">
            <Icon />
          </span>
          <h2>{title}</h2>
        </div>
        <p className="font-light">{description}</p>
      </div>
      <span className="hidden lg:block gift__card-item__arrow -ml-4 rounded-full p-[7px]">
        <FaChevronRight />
      </span>
    </article>
  );
};

export default GiftCard;
