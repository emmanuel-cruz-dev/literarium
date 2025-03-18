import { FC } from "react";
import { CounterBannerProps } from "types/types";
import CounterItem from "./CounterItem";
import useCounterAnimate from "../../../hooks/useCounterAnimate";

const CounterBanner: FC<CounterBannerProps> = ({ arr }) => {
  const { animate, sectionRef } = useCounterAnimate();

  return (
    <article
      ref={sectionRef}
      className="grid gap-8 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-bold text-white background-accent__item py-20 px-16"
    >
      {animate && (
        <>
          {arr.map((item) => (
            <CounterItem key={item.number} {...item} />
          ))}
        </>
      )}
    </article>
  );
};

export default CounterBanner;
