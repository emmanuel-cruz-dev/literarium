import { useState } from "react";
import { MdStarOutline, MdStar } from "react-icons/md";

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null); // Estado para la estrella en hover

  const stars = [1, 2, 3, 4, 5]; // Representa el número de estrellas

  return (
    <div style={{ display: "flex" }}>
      {stars.map((star) => (
        <div
          key={star}
          onMouseEnter={() => setHoveredStar(star)} // Cambiar la estrella en hover
          onMouseLeave={() => setHoveredStar(null)} // Resetear el hover al salir
          style={{ cursor: "pointer", fontSize: "20px" }}
        >
          {hoveredStar !== null && hoveredStar >= star ? (
            <MdStar className="text-yellow-400" />
          ) : (
            <MdStarOutline className="text-yellow-400" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
