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

export interface BookArticleItemsProps {
  cols: number;
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

export interface GiftCardProps {
  icon: ElementType;
  title: string;
  description: string;
}
