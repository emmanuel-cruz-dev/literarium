import { FC } from "react";
import CommentCard from "./CommentCard";

export const CommentContentReview: FC = () => {
  return (
    <>
      <CommentCard {...users[2]} />
      <CommentCard {...users[1]} />
    </>
  );
};
