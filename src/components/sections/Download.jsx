import React from 'react'
import phoneImage from '../../assets/images/phone.png'
import downloadImage from '../../assets/images/play-button.png'
const Download = () => {
  return (
    <div className='py-5 mt-5'>
        <div className='mt-10 lg:mt-32'>
            <div className='container lg:rounded-lg pt-10 lg:shadow-xl flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24'>
                <div className='flex flex-1 justify-center mb-10 lg:mb-0'>
                    <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full' src={phoneImage} alt="/"/>
                </div>
                <div className='flex flex-1 flex-col items-center'>
                  <img className='w-4/6 h-4/6 lg:-mt-10 cursor-pointer' src={downloadImage} alt="/"/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Download