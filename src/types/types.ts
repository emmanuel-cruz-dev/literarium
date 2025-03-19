import { ComponentType, ElementType, ReactNode } from "react";

export interface SuspenseRouteProps {
  element: ComponentType;
  fallback?: ReactNode;
}

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export interface CounterItemProps {
  number: number;
  title: string;
}

export interface CounterBannerProps {
  arr: CounterItemProps[];
}

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

export interface StarsElementProps {
  num: number;
}

export interface BookArticleItemsProps {
  cols: number;
}

export interface CarouselItem {
  id: number;
  title: string;
  author: string;
  img: string;
  price: number;
}

export interface CarouselItemsProps {
  articleClass?: string;
  articleTitle: string;
  arr: CarouselItem[];
}

export interface TestimonialsCardProps {
  image: string;
  name: string;
  occupation: string;
  description: string;
}

export interface BlogCardProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  date: number;
  month: string;
}

export interface BookGuideProps {
  title: string;
  author: string;
  img: string;
  rating: number;
  price: number;
}

export interface GiftCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

export interface PriceCardProps {
  title: string;
  image: string;
  price: number;
  eBooks: number;
  comics: number;
  books: number;
  magazines: number;
}

export interface Founder {
  id: number;
  name: string;
  title: string;
  img: string;
}

export interface FounderCardProps {
  name: string;
  title: string;
  img: string;
}

export interface Item {
  id: number;
  title: string;
  img: string;
  text: string;
}

export interface DetailsItem {
  id: number;
  title: string;
  text: string;
}

export interface MissionRenderProps {
  arr: Item[];
}

export interface DetailsItemProps {
  id: number;
  title: string;
  text: string;
}
