import useMissionRender from "../../../hooks/useMissionRender";
import { FC } from "react";
import { MissionRenderProps } from "types/types";

const MissionRender: FC<MissionRenderProps> = ({ arr }) => {
  const { active, handleClick } = useMissionRender(1);

  return (
    <article className="flex flex-col gap-4">
      <div className="relative">
        <img
          src={arr[active - 1].img}
          alt={`mission ${arr[active - 1].title}`}
          width="573"
          height="220"
          loading="lazy"
        />
        <div className="flex gap-4 justify-center items-end absolute bottom-0 left-0 w-full">
          {arr.map((item) => (
            <button
              onClick={() => handleClick(item.id)}
              className={`text-sm lg:text-base px-2 lg:px-6 uppercase font-bold text-center ${
                active === item.id
                  ? "about-mission__title-btn py-[10px] bg-slate-100"
                  : "bg-slate-100/70 py-2"
              }`}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      <p>{arr[active - 1].text}</p>
    </article>
  );
};

export default MissionRender;
