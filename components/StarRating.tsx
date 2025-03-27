import { FaStar } from "react-icons/fa";


interface StarRatingProps {
    rating: number;
    setRating: (rating: number) => void;
    size?: number;
    className?: string;
};
const StarRating: React.FC<StarRatingProps> = ({rating, setRating, size, className}) => {

  const handleClick = (index: number) => {
    setRating(index + 1 === rating ? 0 : index + 1); // Toggle rating
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleClick(index)}
          className={index < rating ? "text-yellow-500" : "text-gray-600"}
          style={{ cursor: "pointer", transition: "color 0.2s" }}
          size={size?? 20}
        />
      ))}
    </div>
  );
};

export default StarRating;
