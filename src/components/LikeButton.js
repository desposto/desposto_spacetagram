import React, {useState} from 'react'
import {FaRocket} from 'react-icons/fa'
export default function LikeButton() {

    const [isLiked,setIsLiked] = useState(false);

    const handleLike = async() => {
        setIsLiked((isLiked) => !isLiked)
    }

    return (
        <button
          onClick={handleLike}
          className={` flex p-2 text-white bg-gray-400 rounded hover:bg-gray-600 hover:shadow-xl ${isLiked && 'text-red-500'} bg-none`}
        >
          Like <FaRocket/>
        </button>
    )
}