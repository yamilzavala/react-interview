import React from 'react';

const Btn = ({step, setFormStep, isValid}) => {
    if(step > 2) {
        return undefined;
      } else if(step === 2) {
        return (
           <>
             {step > 0 && (<button onClick={() => setFormStep(state => state - 1)} type="button" className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed">
              Before Step
            </button>)}
            <button style={{background: !isValid ? 'gray' : ''}} disabled={!isValid} type="submit" className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed">
                Create Account
            </button>           
           </> 
        )
      } else {
        return (
          <>
            {step > 0 && (<button onClick={() => setFormStep(state => state - 1)} type="button" className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed">
              Before Step
            </button>)}
            <button style={{background: !isValid ? 'gray' : ''}} disabled={!isValid} onClick={() => setFormStep(state => state + 1)} type="button" className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed">
              Next Step
            </button>        
          </>        
        )
      }
};

export default Btn;