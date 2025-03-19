import { FC } from "react";
import CommentCard from "./CommentCard";
import { contentUsers } from "data/contentUsers";

const CommentContentReview: FC = () => {
  return (
    <>
      <CommentCard {...contentUsers[2]} />
      <CommentCard {...contentUsers[1]} />
    </>
  );
};

export default CommentContentReview;
