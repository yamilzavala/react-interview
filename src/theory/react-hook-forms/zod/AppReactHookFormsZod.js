import {useForm} from 'react-hook-form';
import './index.css'
import {zodResolver} from '@hookform/resolvers/zod'
import { userSchema, plans } from './validations/userSchema';

const AppReactHookFormsZod = () => {
    const{ 
            register,
            handleSubmit, 
            watch, 
            reset, 
            formState: {errors}, 
            setValue 
        } = useForm({
            resolver: zodResolver(userSchema),
        });

        //errors
        console.log('Erros: ',errors)

    return (
        <div>
            <form onSubmit={handleSubmit((data)=> {console.log(data)})}>            
                <div>
                    <label>Name</label>
                    <input 
                        type="text"
                        {...register('name')}/>
                    {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        {...register('email')} />
                    {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        {...register('password')} />
                    {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        {...register('confirmPassword')}/>
                    {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
                </div>
                <div>
                    <label>Weight</label>
                    <input 
                        type="number"
                        {...register('weight')} />
                    {errors.weight && <span style={{color: 'red'}}>{errors.weight.message}</span>}
                </div>
                <div>
                    <label>Plan</label>
                    <select {...register('plan')} >
                        {plans.map((plan, idx) => (
                            <option key={idx} value={plan}>{plan}</option>
                        ))}
                    </select>
                    {errors.plan && <span style={{color: 'red'}}>{errors.plan.message}</span>}
                </div>
                <button type='submit'>Submit</button>
            </form>

            <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre>
        </div>
    );
};

export default AppReactHookFormsZod;