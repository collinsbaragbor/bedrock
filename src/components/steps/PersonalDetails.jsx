import {useContext, useState} from 'react';
import { StepperContext } from '../contexts/StepperContext';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function PersonalDetails() {
    const {userData, setUserData} = useContext (StepperContext);
    const [value, setValue] = useState()
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({ ...userData, [name]: value});
    }
    return <div className='flex flex-col'>
        <div className='w-full mx-2 flex-1 font-Raleway font-extrabold '>
            <label htmlFor='First name' className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-3 text-black text-md leading-8">First Name</label>
            <div className='my-2 p-1 flex border-2 border-grey rounded'>
                <input onChange={handleChange} value={userData['firstName'] || ''} name='firstName' placeholder='Enter your first name' className='p-1 px-2 appearance-none outline-none w-full font-medium text-grey'/>
            </div>
            <label htmlFor='Last name' className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-5 text-black text-md leading-8">Last Name</label>
            <div className='my-2 p-1 flex border-2 border-grey rounded'>
                <input onChange={handleChange} value={userData['lastName'] || ''} name='lastName' placeholder='Enter your last name' className='p-1 px-2 appearance-none outline-none w-full font-medium text-grey'/>
            </div>
            <label htmlFor='Phone number' className="after:content-['*'] after:ml-0.5 after:text-red h-6 mt-5 text-black text-md leading-8">Phone Number</label>
            <PhoneInput class='my-2 p-1 flex border-2 focus:outline-none border-grey rounded w-full font-medium text-grey' placeholder="Enter phone number" international countryCallingCodeEditable={false} defaultCountry="UA" value={value} onChange={setValue}/>            
        </div>
    </div>
}
