import {AppProvider} from './context/state-context'
import Header from './shared/Header';
import { Stepper } from './components/steps/Stepper ';
import './index.css'
import { useRef } from 'react';

const AppMultistepForm = () => {
    const buttonRef = useRef();

    const onStepChange = () => {
        buttonRef.current?.click();
    }

    return (
        <div>
            <AppProvider>
                <Stepper onStepChange={onStepChange}/>
                <Header buttonRef={buttonRef}/>
            </AppProvider>            
        </div>
    );
};

export default AppMultistepForm;