const Input = ({label, register, type='text'}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <input {...register(label)} className="input" type={type}/>
        </div>
    );
};

export default Input;