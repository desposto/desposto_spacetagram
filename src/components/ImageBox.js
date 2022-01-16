import React, { useState } from "react";
import LikeButton from "./LikeButton";

const ImageBox = ({ image, index }) => {

  const [isReadMore, setIsReadMore] = useState(true);//state to reack if user has selected readmore
  const handleReadMore = () => {
    //sets isLiked to the opposite of the current isReadMore
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 mx-2 bg-white">
      <div className="flex-col items-start py-2">
        <div className="px-2 text-xl font-bold">{image.title}</div>
        <div className="px-2 text-sm">{image.date}</div>
      </div>
      <img src={image.url} alt="" className="w-full pb-2" />
      <div className="px-4 py-2">
        <div>
          <LikeButton index={index} />
        </div>
      </div>
      <div className="px-4 py-1 mb-3">
        <div className={`text-black text-sm ${isReadMore && "line-clamp-3"}`}> 
          {image.explanation}
        </div>
        <button
          onClick={handleReadMore}
          className="text-black hover:text-gray-700 bg-none rounded text-sm font-bold"
        >
          {isReadMore ? "Read More..." : "Read Less..."}
        </button>
      </div>
    </div>
  );
};

export default ImageBox;
