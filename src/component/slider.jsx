import React from 'react'
import Review from './review.jsx'
import Achivments from './achivments.jsx'
import SocialMedia from "./socialMedia.jsx"
const slider = () => {
  return (
    <div className='flex justify-center *:w-92 *:h-92 bg-base-200  items-center gap-10 py-10 sm:flex-row flex-col'>
        <Review/>
        <SocialMedia/>
        <Achivments/>
    </div>
  )
}

export default slider