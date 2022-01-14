import React, {useState} from 'react'
import {FaRocket} from 'react-icons/fa'
export default function LikeButton({index}) {

    const [isLiked,setIsLiked] = useState(localStorage.getItem(String(index)) === 'true');
    
    React.useEffect(() => {
        localStorage.setItem(String(index), isLiked);
      }, [isLiked]);

    const handleLike = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div>
        <button
          onClick={handleLike}
          className={` flex p-2 text-white bg-gray-400 rounded hover:bg-gray-600 hover:shadow-xl ${isLiked && 'text-red-500'} bg-none`}
        >
          Like <FaRocket/>
        </button>
        </div>
    )
}