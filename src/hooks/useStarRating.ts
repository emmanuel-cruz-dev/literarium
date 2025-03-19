import { useState } from "react";

const useStarRating = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null); // Estado para la estrella en hover
  const [selectedRating, setSelectedRating] = useState(0); // Estado para la calificación seleccionada

  const handleMouseEnter = (star: number) => {
    setHoveredStar(star);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleClick = (star: number) => {
    setSelectedRating(star);
  };

  return {
    hoveredStar,
    selectedRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};

export default useStarRating;
