import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='flex justify-around mt-4 mb-8'>
        <button onClick={()=>handleClick()} className={`text-slate-400 py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 ${currentStep == 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>Back</button>
        <button onClick={()=>handleClick("next")} className='bg-green-500 text-white py-2 px-4 rounded-xl font-semibold cursor-pointer'>{currentStep == steps.length - 1 ? 'Confirm' : 'Next'}</button>
    </div>
  )
}

export default StepperControl