import { CardArticleProps } from "types/types";
import { FaGift, FaBook, FaTruck, FaCalculator } from "react-icons/fa";

export const mainCardItems: CardArticleProps[] = [
  {
    id: 1,
    icon: FaGift,
    title: "Free Gift Wrap",
    description:
      "We offer personalized gift wrapping, with blue boxes and ribbons of your choice, completely free of charge.",
  },
  {
    id: 2,
    icon: FaBook,
    title: "Buy Selling Used Books",
    description:
      "Buy and sell books with ease. We offer a reliable platform to give new life to the books you've already read.",
  },
  {
    id: 3,
    icon: FaTruck,
    title: "Free Shipping",
    description:
      "Enjoy free international shipping on purchases over $1000, with additional discounts for you.",
  },
  {
    id: 4,
    icon: FaCalculator,
    title: "Returns & Exchanges",
    description:
      "Returns or exchanges within 5 days. Please note that we do not accept returns in case of loss or damage.",
  },
];
