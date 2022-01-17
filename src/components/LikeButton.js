import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function LikeButton({ index }) {
  const [isLiked, setIsLiked] = useState(
    //State to track if user has liked the image
    localStorage.getItem(String(index)) === "true" //sets the localStorage key to the index of the image
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
      {/* if state isLiked is true than the like button will fill red*/}
      <button
        onClick={handleLike}
        className={` flex justify-center p-2 text-white bg-gray-400 rounded hover:bg-gray-600 hover:shadow-xl ${
          isLiked && "text-red-400"
        } bg-none`}
      >
        <span className="text-lg">
          <FaHeart />
        </span>
      </button>
    </div>
  );
}
