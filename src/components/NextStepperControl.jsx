import React from 'react'

function NextStepperControl({handleClick, currentStep, steps}) {
  return (
    <div className='flex justify-around mt-4 mb-8'>
        <button onClick={()=>handleClick("next")} className='shadow-md py-3 px-6 rounded-full transition duration-300 bg-light-purple text-[#FFFFFF] hover:bg-grey hover:text-black font-semibold cursor-pointer'>{currentStep === steps.length - 1 ? 'Confirm' : 'Next'}</button>
    </div>
  )
}

export default NextStepperControl