import { colorClasses, sizeClasses } from "../../constants/constants";
import { FC } from "react";
import { LoaderProps } from "types/types";

const Loader: FC<LoaderProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  return (
    <article
      className={`w-screen h-screen bg-cyan-400 flex items-center justify-center ${className}`}
    >
      <div
        className={`
          animate-spin
          rounded-full
          border-4
          border-t-transparent
          ${sizeClasses[size]}
          ${colorClasses[color as keyof typeof colorClasses]}
        `}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Cargando...</span>
      </div>
    </article>
  );
};

export default Loader;
