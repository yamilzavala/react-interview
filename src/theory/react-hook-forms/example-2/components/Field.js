import Error from "./Error";

const Field = ({type, name, errors, register, required}) => {
    return (
        <div>
            <label>{name}</label>
            <input name={name} type={type} {...register(name, {required: required, minLength: 2, maxLength: 20})}/>
            {errors?.name?.type === 'required' && <Error field={name}/>}            
        </div>
    );
};

export default Field;