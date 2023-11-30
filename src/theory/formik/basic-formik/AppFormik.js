import {useFormik} from 'formik';
import './index.css';

const AppFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            userName: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('onSubmit: ', values)
        },
        validate: (values) => {
            const errors = {}
            if(!values.email) errors.email = 'Email is required!'
            if(!values.userName) errors.userName = 'Username is required!'
            if(!values.password) errors.password = 'Password is required!'
            return errors;
        }
    })

    return (
        <div>
            <h1>Formik</h1>

            <form onSubmit={formik.handleSubmit}>
                <div className="field">
                    <input 
                        placeholder="Email" 
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>

                    <div className='error'>
                        {formik.errors.email && formik.touched.email && formik.errors.email}
                    </div>
                </div>
                <div className="field">
                    <input 
                        placeholder="Username" 
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>

                    <div className='error'>
                        {formik.errors.userName && formik.touched.userName && formik.errors.userName}
                    </div>
                </div>
                <div className="field">
                    <input 
                        placeholder="Password" 
                        name="password" 
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>

                    <div className='error'>
                        {formik.errors.password && formik.touched.password && formik.errors.password}
                    </div>
                </div>
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
};

export default AppFormik;