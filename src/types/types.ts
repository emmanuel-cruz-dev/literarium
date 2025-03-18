import { ElementType } from "react";

export interface InformationListProps {
  data: string[];
}

export interface CardArticleProps {
  id: number;
  icon: ElementType;
  title: string;
  description: string;
}

export interface BookCardProps {
  id: number;
  img: string;
  title: string;
  author: string;
  price: number;
  rating: number;
}

export interface BookArticleItemsProps {
  cols: number;
}
