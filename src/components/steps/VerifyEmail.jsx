import React from 'react'

export default function VerifyEmail() {
  return <div className='flex flex-col'>
  <div className='w-full mx-2 flex-1 font-Raleway font-extrabold '>
    <div className='text-grey text-center text-sm mb-8'>
      <h3 className=''>Let's verify your email.</h3>
      <p>A six digit code has been sent to your email ******nonso45@gmail.com</p>
    </div>
    <label htmlFor='Verification' className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-3 text-black text-md leading-8">Verification Code</label>
    <div className='my-2 p-1 flex border-2 border-grey rounded'>
        <input name='verify' type='number' min="1" max="5" placeholder='Enter the OTP' className='out-of-range:border-red p-1 px-2 appearance-none outline-none w-full font-medium text-grey'/>
    </div>
      
  </div>
</div>
}
