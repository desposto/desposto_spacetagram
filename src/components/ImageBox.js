import React from 'react'

const ImageBox = ({image}) => {
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 mx-2 bg-white">
        <div className="px-3 py-2 text-xl font-bold">
            {image.title}
        </div>
        <img src={image.url} alt ="" className ="w-full"/>
        <div className="px-6 py-4">
          <div className=" text-black text-sm ">
           {image.date} 
          </div>
        </div>
        <div className="px-6 py-0.5 mb-2">
          <div className=" text-black text-sm">
             {image.explanation}
          </div>
        </div>
      </div>
    )
}

export default ImageBox;