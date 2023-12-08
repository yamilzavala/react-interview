import {AppProvider} from './context/state-context'
import Header from './shared/Header';
import { Stepper } from './components/steps/Stepper ';
import './index.css'

const AppMultistepForm = () => {
    return (
        <div>
            <AppProvider>
                <Stepper/>
                <Header/>
            </AppProvider>            
        </div>
    );
};

export default AppMultistepForm;