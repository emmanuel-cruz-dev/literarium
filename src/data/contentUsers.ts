import { UserItem } from "types/types";
import CommentUser1 from "../assets/images/comment-user1.webp";
import CommentUser2 from "../assets/images/comment-user2.webp";
import CommentUser3 from "../assets/images/comment-user3.webp";
import CommentUser4 from "../assets/images/comment-user4.webp";
import CommentUser5 from "../assets/images/comment-user5.webp";
import CommentUser6 from "../assets/images/comment-user6.webp";
import CommentUser7 from "../assets/images/comment-user7.webp";

export const contentUsers: UserItem[] = [
  {
    id: 1,
    name: "Clara Hoffman",
    date: "June 20, 2024",
    comment:
      "I completely agree! Digital formats have made reading more accessible, but there's nothing like holding a physical book in your hands.",
    img: CommentUser1,
  },
  {
    id: 2,
    name: "Isabelle McKenzie",
    date: "August 12, 2024",
    comment:
      "This article really resonated with me. I've been exploring global literature recently, and it's opened my eyes to so many new perspectives!",
    img: CommentUser2,
  },
  {
    id: 3,
    name: "Luca Moretti",
    date: "September 18, 2024",
    comment:
      "The diversity in self-published books is amazing, but sometimes it's hard to find quality stories. Any tips on good curation platforms?",
    img: CommentUser3,
  },
  {
    id: 4,
    name: "James Green",
    date: "June 09, 2024",
    comment:
      "This was such a thoughtful piece. I'd love to hear more about your favorite global authors and their impact on literature.",
    img: CommentUser7,
  },
];

export const usersReply1: UserItem[] = [
  {
    id: 1,
    name: "Amelie Schneider",
    date: "June 21, 2024",
    comment:
      "I hadn't thought about how algorithms are shaping what we read. It's fascinating and a bit scary. Excellent read!",
    img: CommentUser4,
  },
  {
    id: 2,
    name: "Erik Johansson",
    date: "June 22, 2024",
    comment:
      "Thank you for highlighting the impact of self-publishing. As an aspiring author, it's encouraging to see these changes.",
    img: CommentUser5,
  },
];

export const usersReply2: UserItem[] = [
  {
    id: 3,
    name: "Freya Nielsen",
    date: "August 29, 2024",
    comment:
      "Beautifully written! Stories truly connect us all, no matter the format. I hope printed books never disappear completely",
    img: CommentUser6,
  },
];
