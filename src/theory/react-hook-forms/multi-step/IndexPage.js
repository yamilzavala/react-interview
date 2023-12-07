import {useState} from "react"
import {useForm} from 'react-hook-form'
import Btn from "./components/Btn";
import Error from "./components/Error";

const MAX_STEPS = 3;

const IndexPage = () => {
  const [formStep, setFormStep] = useState(0)
  const {
      watch, 
      register, 
      formState: {errors, isValid},
      handleSubmit
    } = useForm({mode: 'all'});

  const submitForm = (values) => {
    alert(JSON.stringify(values, null, 2))
    setFormStep(state => state + 1)
  }

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>

      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">

          {formStep < MAX_STEPS && ( <div> <p>Step {formStep + 1} of {MAX_STEPS}</p> </div>)}
         

          <form onSubmit={handleSubmit(submitForm)}>
            {formStep === 0 && (
              <section>
                {/* Section one */}
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-input"
                  {...register('username', {
                    required: {
                      value: true,
                      message: 'Username required'
                    }
                  })}
                />
                {errors.username && <Error message={errors.username.message} />}
              </section>
            )}
        
            {formStep === 1 && (
              <section>
                {/* Section two */}
                <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="text-input"
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Address required'
                    }
                  })}
                />
                {errors.address && <Error message={errors.address.message} />}
              </section>
            )}  
             
            {formStep === 2 && (
              <section>
                {/* Section three */}
                <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
                <div className="block mt-6">
                  <input
                    name="toc"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    {...register('toc', {
                      required: true
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <div className="block mt-6">
                  <input
                    name="pp"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    {...register('pp', {
                      required: true
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
              </section>
            )}

            {formStep === 3 && (
              <section>
                {/* Section four */}
                <h2 className="font-semibold text-3xl mb-8">Congratulations!</h2>                
              </section>
            )}  
            
            <Btn step={formStep} setFormStep={setFormStep} isValid={isValid}/>

            <pre>
            {JSON.stringify(watch(), null, 2)}
            </pre>
          </form>        
        </div>
      </div>
    </div>
  )
}

export default IndexPage