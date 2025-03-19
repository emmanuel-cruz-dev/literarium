import useStarRating from "../../hooks/useStarRating";
import { MdStarOutline, MdStar } from "react-icons/md";

function StarRating() {
  const {
    hoveredStar,
    selectedRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useStarRating();
  const stars = [1, 2, 3, 4, 5]; // Número de estrellas

  return (
    <article style={{ display: "flex" }}>
      {stars.map((star) => (
        <div
          key={star}
          onMouseEnter={() => handleMouseEnter(star)} // Cambiar la estrella en hover
          onMouseLeave={handleMouseLeave} // Resetear el hover al salir
          onClick={() => handleClick(star)} // Guardar la calificación seleccionada
          style={{ cursor: "pointer", fontSize: "20px" }}
        >
          {(hoveredStar !== null && hoveredStar >= star) ||
          selectedRating >= star ? (
            <MdStar className="text-yellow-400" />
          ) : (
            <MdStarOutline className="text-yellow-400" />
          )}
        </div>
      ))}
    </article>
  );
}

export default StarRating;
