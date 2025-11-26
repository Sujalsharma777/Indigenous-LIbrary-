import React from 'react'
import Poster from "../assets/poster.png"

const poster = () => {
  return (

    <div className='flex justify-center bg-base-200 '>
        <img src={  Poster} alt="image" className='bg-base-200 sm:w-[50%] h-[50%]  p-10 object-contain' />
    </div>
  )
}

export default poster