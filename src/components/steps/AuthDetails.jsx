import {useContext} from 'react';
import { StepperContext } from '../contexts/StepperContext';

export default function AuthDetails() {
  const {userData, setUserData} = useContext (StepperContext);
  const handleChange = (e) => {
      const {name, value} = e.target;
      setUserData({ ...userData, [name]: value});
  }
  return <div className='flex flex-col'>
        <div className='w-full mx-2 flex-1 font-Raleway font-extrabold '>
            <label htmlFor='Email' className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-3 text-black text-md leading-8">Email Address</label>
            <div className='my-2 p-1 flex border-2 border-grey rounded'>
                <input onChange={handleChange} value={userData['email'] || ''} name='email' type='email' placeholder='Enter your email address' className='p-1 px-2 appearance-none outline-none w-full font-medium text-grey'/>
            </div>
            <label htmlFor='Password' className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-5 text-black text-md leading-8">Password</label>
            <div className='my-2 p-1 flex border-2 border-grey rounded'>
                <input onChange={handleChange} value={userData['password'] || ''} name='password' type='password' placeholder='Enter password' className='p-1 px-2 appearance-none outline-none w-full font-medium text-grey'/>
            </div>
            <label className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-5 text-black text-md leading-8">Confirm Password</label>
            <div className='my-2 p-1 flex border-2 border-grey rounded'>
                <input onChange={handleChange} value={userData['confirm_password'] || ''} name='confirm_password' type='password' placeholder='Confirm password' className='p-1 px-2 appearance-none outline-none w-full font-medium text-grey'/>
            </div>
        </div>
    </div>
}
