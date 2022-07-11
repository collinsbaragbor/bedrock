import React from 'react'
import { useState } from 'react'
import { StepperContext } from '../components/contexts/StepperContext'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import background from '../assets/images/vector.png'
import PersonalDetails from '../components/steps/PersonalDetails'
import AuthDetails from '../components/steps/AuthDetails'
import PaymentDetails from '../components/steps/PaymentDetails'
import VerifyEmail from '../components/steps/VerifyEmail'
const SignupPage = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = [
        'Personal Information',
        'Auth Info',
        'Verify Email',
        'Payment Info'
    ];
    const displayStep = (step) => {
        switch (step){
            case 1:
                return <PersonalDetails />
            case 2:
                return <AuthDetails />
            case 3:
                return <VerifyEmail />
            case 4:
                return <PaymentDetails />
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction == 'next' ? newStep++ : newStep-- ;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

  return (
    <div>
        <div className='w-1/4 h-1/4 '>
            <img className='w-full h-full' src={background}/>
        </div>
        <div className='md:w-1/2 mx-auto lg:-mt-80 shadow-xl rounded-2xl pb-2 bg-white'>
            <div className='horizontal mt-5'>
                <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                />
                <div className='my-10 p-10'>
                    <StepperContext.Provider value={{
                        userData,
                        setUserData,
                        finalData,
                        setFinalData
                    }}>
                        {displayStep(currentStep)}
                    </StepperContext.Provider>
                </div>
            </div>
            
            <StepperControl 
                handleClick = {handleClick}
                currentStep = {currentStep}
                steps={steps}
            />
        </div>
    </div>
  )
}

export default SignupPage