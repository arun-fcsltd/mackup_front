// components/StarRating.js
import { useState } from 'react';
import { StarIcon } from "@heroicons/react/24/solid";
const StarRating = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    onRatingSelect(ratingValue);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              className="hidden"
            />
            <StarIcon
              className={`cursor-pointer w-5 h-5 ${
                ratingValue <= (hover || rating) ? 'ctheme' : 'text-gray-200'
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
