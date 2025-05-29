import { FC } from "react";
import { MdStarOutline, MdStar } from "react-icons/md";
import { StarsElementProps } from "../../types/types";

const StarsElement: FC<StarsElementProps> = ({ num }) => {
  const totalStars: number = 5;

  const stars: JSX.Element[] = Array.from({ length: totalStars }, (_, index) =>
    index < num ? (
      <MdStar key={index} color="#ffc107" />
    ) : (
      <MdStarOutline key={index} color="#ffc107" />
    )
  );

  return <div className="flex text-[1.30rem]">{stars}</div>;
};

export default StarsElement;
