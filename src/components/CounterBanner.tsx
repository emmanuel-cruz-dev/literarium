import { FC } from "react";

interface CounterItemProps {
  number: number;
  title: string;
}

const CounterItem: FC<CounterItemProps> = ({ number, title }) => {
  return (
    <div className="text-center">
      <p className="text-6xl">{number}</p>
      <p className="text-lg font-bold uppercase">{title}</p>
    </div>
  );
};

const CounterBanner: FC = () => {
  return (
    <article className="grid grid-cols-4 font-semibold text-white background-accent__item py-20">
      <CounterItem number={3578} title="Books to Read" />
      <CounterItem number={589} title="Online Users" />
      <CounterItem number={1254} title="Best Authors" />
      <CounterItem number={98} title="Awards" />
    </article>
  );
};

export default CounterBanner;
