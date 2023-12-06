import Field from './components/Field';
import './index.css';
import {useForm} from 'react-hook-form'

const initialFormState = {
    name: 'yamil',
    email: 'yamil@gmail.com',
    password: '123',
    confirmPassword: '123',
    birthdate: '2000-01-01',
    country: 'mx',
    terms: true
}

const AppReactHookForms2 = () => {

    const {
        register, 
        handleSubmit, 
        formState:{errors}, 
        watch,
        setValue,
        reset
    } = useForm({
        defaultValues: initialFormState
    })

    const submit = (data) => {
        console.log('DATA: ',data)
        reset()
    }

    console.log(errors)

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submit)}>
                <Field type='text' name='name' errors={errors} register={register} required={true}/>
                {/* <div>
                    <label>name</label>
                    <input name='name' type="text" {...register('name',{required: true})}/>
                    {errors.name && <span>Name required</span>}
                </div> */}

                <div>
                    <label>email</label>
                    <input name='email' type="text"  {...register('email', 
                        {required: {value: true, message: 'email required'}, 
                         minLength:{value: 5, message: 'minLength 5'}, 
                         pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'email invalid'}                         
                        })}/>
                    {errors.email && <span style={{color: 'red'}}>{errors.email?.message}</span>}
                </div>

                <div>
                    <label>password</label>
                    <input name='password' type="password"  {...register('password')}/>
                </div>

                <div>
                    <label>confirm password</label>
                    <input name='confirmpassword' type="password"  {...register('confirmPassword',
                     {
                        required: {value: true, message: 'password required'},
                        validate: (value) => {
                            return value === watch('password') || 'password and connfirm password are not equals'
                        }
                     })}/>
                     {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword?.message}</span>}
                </div>

                <div>
                    <label>birth date</label>
                    <input name='birthdate' type="date"  {...register('birthdate',
                     { required: {value: true, message: 'birth date required'},
                        validate: (value) => {
                        const birthDate = new Date(value).getFullYear();
                        const currentDate = new Date().getFullYear();
                        const age = currentDate - birthDate;
                        return age >= 18 || 'you must be older than 18'
                     }})
                    }/>
                    {errors.birthdate && <span style={{color: 'red'}}>{errors.birthdate?.message}</span>}
                </div>

                <div>
                    <label>country</label>
                    <select name='country'  {...register('country')}>
                        <option value="mx">mexico</option>
                        <option value="ar">argentina</option>
                        <option value="cl">colombia</option>
                        <option value="jp">japon</option>
                    </select>
                </div>

                { watch('country') === 'ar' && (
                    <div>
                        <label>province</label>
                        <input name='province' {...register('province', 
                            {
                                required: {value: true, message: 'Province required'} 
                            }
                        )} />  
                        {errors.province && <span style={{color: 'red'}}>{errors.province?.message}</span>}                         
                    </div>
                )}

                <div>
                    <label>choose file</label>
                    <input name='file' type="file" onChange={e => {setValue('userPhoto', e.target.files[0].name)}}/>
                </div>

                <div>
                    <label>terms and Conditions</label>
                    <input name='terms' type="checkbox"  {...register('terms',
                    {
                        required: {value: true, message: 'Terms and Conditions required'}
                    })}/>
                    {errors.terms && <span style={{color: 'red'}}>{errors.terms?.message}</span>}    
                </div>

                <button type="submit">Submit!</button>

                <pre>
                    {JSON.stringify(watch(), null, 2)}
                </pre>
            </form>
        </div>
    );
};

export default AppReactHookForms2;