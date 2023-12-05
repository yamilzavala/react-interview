import {useForm} from 'react-hook-form'
import Input from './components/Input';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';

//Validators
const validationSchema = yup.object({
    username: yup.string().required('Missing username'),
    email: yup.string().required('Missing email'),
    password: yup.string().required('Missing password'),
})

const AppReactHookForm = () => {
    const {register, handleSubmit, formState: {errors}, setError} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        }
    });

    console.log('errors: ', errors)

    const onSubmit = (data) => {
        console.log('data: ', data)
        axios.post('https://api.realworld.io/api/users', {user: data})  
                .then(resp => console.log('succ: ', resp))
                .catch(e => {
                    console.log('error: ', e)
                    if(e.response.data.errors.username) setError('username', {type: 'server', message: e.response.data.errors.username[0]}) 
                    if(e.response.data.errors.email) setError('email', {type: 'server', message: e.response.data.errors.email[0]}) 
                    if(e.response.data.errors.password) setError('password', {type: 'server', message: e.response.data.errors.password[0]}) 
                })
    }

    return (
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label='username' register={register}/>
                {errors.username && <span style={{color: 'red'}}>{errors.username.message}</span>}

                <Input label='email' register={register} />
                {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}

                <Input label='password' register={register} type='password' />
                {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}

                <button>Register!</button>
            </form>
        </div>
    );
};

export default AppReactHookForm;