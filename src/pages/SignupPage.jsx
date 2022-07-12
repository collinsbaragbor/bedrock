import React from 'react'
import { useState } from 'react'
import { StepperContext } from '../components/contexts/StepperContext'
import Stepper from '../components/Stepper'
import BackStepperControl from '../components/BackStepperControl'
import background from '../assets/images/vector.png'
import PersonalDetails from '../components/steps/PersonalDetails'
import AuthDetails from '../components/steps/AuthDetails'
import PaymentDetails from '../components/steps/PaymentDetails'
import VerifyEmail from '../components/steps/VerifyEmail'
import NextStepperControl from '../components/NextStepperControl'
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
            default:
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

        direction === 'next' ? newStep++ : newStep-- ;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

  return (
    <div>
        <div className='absolute inline-flex top-0 right-0 z-10 rounded-xl font-semibold'>
            <BackStepperControl 
                handleClick = {handleClick}
                currentStep = {currentStep}
                steps={steps}
            />
        </div>
        <div className='absolute left-0 top-0'>
            <img className='hidden w-1/2 h-1/2 md:w-full md:h-full' src={background} alt='/'/>
        </div>
        <div className='font-Raleway md:w-[40%] mx-auto mt-36 pb-2'>
            <h1 className='text-4xl text-center text-black'>Sign Up</h1>
            <p className='text-center text-xl text-black mt-4'>
            Let's get you set up so that you can start trading.
            </p>
            <div className='horizontal mt-5'>
                <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                />
                <div className='my-5 p-10'>
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
            
            <NextStepperControl
                handleClick = {handleClick}
                currentStep = {currentStep}
                steps={steps}
            />
        </div>
    </div>
  )
}

export default SignupPage