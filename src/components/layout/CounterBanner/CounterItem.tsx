import useCounterItem from "../../../hooks/useCounterItem";
import { FC } from "react";
import { CounterItemProps } from "types/types";

const CounterItem: FC<CounterItemProps> = ({ number, title }) => {
  const currentNumber = useCounterItem(number);

  return (
    <div className="text-center">
      <p className="text-7xl">
        {currentNumber > 1000
          ? currentNumber.toLocaleString("de-DE")
          : currentNumber}
      </p>
      <p className="w-2/3 mx-auto uppercase">{title}</p>
    </div>
  );
};

export default CounterItem;
