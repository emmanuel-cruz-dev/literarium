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
  const stars = [1, 2, 3, 4, 5];

  return (
    <article style={{ display: "flex" }}>
      {stars.map((star) => (
        <div
          key={star}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
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
