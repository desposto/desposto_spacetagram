import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
export default function LikeButton({ index }) {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(String(index)) === "true"
  );

  React.useEffect(() => {
    //retrieve saved likes from local storage when a page reloads
    localStorage.setItem(String(index), isLiked);
  }, [isLiked]);

  const handleLike = () => {
    //sets isLiked to the opposite of the current isLiked
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <button
        onClick={handleLike}
        className={` flex items-start justify-center p-2 text-white bg-gray-400 rounded hover:bg-gray-600 hover:shadow-xl ${
          isLiked && "text-red-500"
        } bg-none`}
      >
        <span className="text-lg"><FaRocket /></span>
        <span className="text-lg">Like</span>
      </button>
    </div>
  );
}
