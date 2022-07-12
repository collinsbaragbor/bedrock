import React from 'react'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'
const BackStepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='flex justify-around mt-4 mb-8'>
        <button onClick={()=>handleClick()} className={`inline-flex text-light-purple my-auto py-2 px-4 rounded-xl font-semibold text-xl cursor-pointer ${currentStep === 1 ? 'opacity-0 cursor-not-allowed' : ''}`}><ArrowNarrowLeftIcon className='w-6 h-5 m-auto text-light-purple' fill='currentColor' /> Back</button>
    </div>
  )
}

export default BackStepperControl