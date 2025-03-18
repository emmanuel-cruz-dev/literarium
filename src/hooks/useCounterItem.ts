import { useEffect, useState } from "react";

const useCounterItem = (number: number) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < number) {
        setCurrentNumber(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCurrentNumber(number);
      }
    };

    animate();
  }, [number]);

  return currentNumber;
};

export default useCounterItem;
