import React from "react";
import LikeButton from "./LikeButton";

const ImageBox = ({ image, index }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 mx-2 bg-white">
      <div className="flex-col items-start py-2">
        <div className="px-2 text-xl font-bold">{image.title}</div>
        <div className="px-2 text-sm">{image.date}</div>
      </div>
      <img src={image.url} alt="" className="w-full" />
      <div className="px-4 py-2">
        <div>
          <LikeButton index={index} />
        </div>
      </div>
      <div className="px-4 py-1 mb-3 text-black text-sm">
        {image.explanation}
      </div>
    </div>
  );
};

export default ImageBox;
