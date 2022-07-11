import {useContext} from 'react';
import { StepperContext } from '../contexts/StepperContext';

export default function PersonalDetails() {
    const {userData, setUserData} = useContext (StepperContext);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({ ...userData, [name]: value});
    }
    return <div className='flex flex-col'>PersonalDetails</div>
}
