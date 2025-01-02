import { FC, useEffect, useState, useRef } from "react";

interface CounterItemProps {
  number: number;
  title: string;
}

const CounterItem: FC<CounterItemProps> = ({ number, title }) => {
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

  return (
    <div className="text-center">
      <p className="text-7xl">{currentNumber}</p>
      <p className="w-2/3 mx-auto uppercase">{title}</p>
    </div>
  );
};

const CounterBanner: FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.8 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={sectionRef}
      className="grid gap-8 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-bold text-white background-accent__item py-20 px-16"
    >
      {animate && (
        <>
          <CounterItem number={3578} title="Books to Discover" />
          <CounterItem number={589} title="Active Readers" />
          <CounterItem number={1254} title="Renowned Authors" />
          <CounterItem number={98} title="Awards Won" />
        </>
      )}
    </article>
  );
};

export default CounterBanner;
