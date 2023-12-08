import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {useAppState} from '../../hooks/use-state-context'
import { Button, Field, Form, Input } from "../forms";

const Contact = () => {
    const [state, setState] = useAppState();
    const {
        watch,
        formState: {errors},
        handleSubmit,
        register
    } = useForm({defaultValues: state, node: 'onSubmit'});
    const watchPassword = watch('password');
    const navigate = useNavigate();

    const saveData = (data) => {
        setState({...state, ...data})
        navigate('/education')
    }

    return (
        <Form onSubmit={handleSubmit(saveData)}>
            <fieldset>
                <legend>Contact</legend>
                <Field label="First name" error={errors?.firstName}>
                    <Input id="first-name" {...register('firstName', {
                        required: {
                            value: true,
                            message: 'First name required'
                        }
                    })}/>
                </Field>

                <Field label="Last name" error={errors?.lastName}>
                    <Input
                        {...register("lastName", { required: "Last name is required" })}
                        id="last-name"
                    />
                </Field>

                <Field label="Email" error={errors?.email}>
                    <Input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        id="email"
                    />
                </Field>

                <Field label="Password" error={errors?.password}>
                    <Input
                        {...register("password", { required: "Password is required" })}
                        type="password"
                        id="password"
                    />
                </Field>       

                <Field label="Confirm Password" error={errors?.confirmPassword}>
                    <Input 
                        {...register('confirmPassword', { 
                            required: "Confirm Password is required",
                            validate: (value) => value === watchPassword || 'The passwords do not match' 
                        })} 
                        type="password"
                        id="password-confirm"   
                    />
                </Field>         
                <Button>Next {'>'}</Button>
            </fieldset>

        </Form>
    );
};

export default Contact;