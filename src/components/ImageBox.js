import React from 'react'
import LikeButton from './LikeButton';

const ImageBox = ({image}) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 mx-2 bg-white">
        <div className='flex pt-2'>
        <div className="px-2 text-xl font-bold">
            {image.title}
        </div>
        <div className="px-2 text-sm">
            {image.date}
        </div>
        </div>
        <img src={image.url} alt ="" className ="w-full"/>
        <div className="px-4 py-2">
        <div>
            <LikeButton/>
        </div>
        </div>
        <div className="px-4 py-0.5 mb-2">
          <div className=" text-black text-sm">
             {image.explanation}
          </div>
        </div>
      </div>
    )
}

export default ImageBox;