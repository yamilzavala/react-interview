import {Form, Field, ErrorMessage, Formik} from 'formik';
import './index.css';
import * as Yup from 'yup'

const AppFormikComponent = () => {
    const initialValues = {
        email: '',
        userName: '',
        password: ''
    };

    const onSubmit = (values) => {
        console.log('onSubmit: ', values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email'),
        userName: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    })

    return (
        <div>
            <h1>Formik</h1>
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {() => (
                    <Form>
                        <div className="field">
                            <Field name="email" placeholder="Email"/>
                            <div className='error'>
                                <ErrorMessage name='email' component='span'/>
                            </div>
                        </div>
                        <div className="field">
                            <Field name='userName' placeholder='userName' />
                            
                            <div className='error'>
                                <ErrorMessage name='userName' component='span' />
                            </div>
                        </div>
                        <div className="field">
                            <Field name='password' placeholder='password'/>
                            <div className='error'>
                                <ErrorMessage name='password' component='span' />
                            </div>
                        </div>
                        <button type="submit">Submit!</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AppFormikComponent;