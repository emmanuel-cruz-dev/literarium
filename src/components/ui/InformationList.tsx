import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { InformationListProps } from "types/types";

export const InformationList: FC<InformationListProps> = ({ data }) => {
  return (
    <ul className="unordered__list-container hover-item">
      {data.map((item) => (
        <li key={item}>
          <a className="flex items-center justify-between" href="#">
            {item} <FaChevronRight />
          </a>
        </li>
      ))}
    </ul>
  );
};
