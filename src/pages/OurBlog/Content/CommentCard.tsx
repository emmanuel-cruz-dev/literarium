import { FC } from "react";
import { CommentCardProps } from "types/types";

const CommentCard: FC<CommentCardProps> = ({
  img,
  name,
  date,
  comment,
  children,
}) => {
  return (
    <article className="flex flex-row gap-6 relative">
      <button className="blog-content__btn__comment hidden absolute md:block">
        Reply
      </button>
      <a
        href="#"
        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
      >
        <img
          className="w-full h-full object-cover"
          src={img}
          alt={`Foto de ${name}`}
          width="370"
          height="370"
          loading="lazy"
        />
      </a>
      <div className="flex flex-col gap-2 uppercase">
        <a href="#">
          <h3 className="font-semibold text-[17px] text-black">{name}</h3>
        </a>
        <a href="#" className="text-[13px]">
          {date}
        </a>
        <p className="normal-case">{comment}</p>
        <button className="blog-content__btn__comment md:hidden">Reply</button>
        <div className="mt-4">{children}</div>
      </div>
    </article>
  );
};

export default CommentCard;
