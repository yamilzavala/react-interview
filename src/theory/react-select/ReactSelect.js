import Select from 'react-select'
import CreateTableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'
import './index.css';
import { useState } from 'react';

const options = [
    {value: 'value_1', label: 'option_1', color: 'blue', bgcolor: 'gray'},
    {value: 'value_2', label: 'option_2', color: 'red', bgcolor: 'white'},
    {value: 'value_3', label: 'option_3', color: 'orange', bgcolor: 'black'},
    {value: 'value_4', label: 'option_4', color: 'purple', bgcolor: 'yellow'},
]

//animations
const animated = makeAnimated()

//fltered options
const loadOptions = (filterValue, cb) => {
    setTimeout(() => {
        const flteredOptions = options.filter(option => option.label.toLowerCase().includes(filterValue.toLowerCase()))
        cb(flteredOptions)
    },2000)
}

//styles
const styles = {
    control: styles => {
        console.log('styles: ',styles)
        return {
            ...styles,
            backgroundColor: 'black'
        }
    },
    placeholder: styles => {
        return {
            ...styles,
            color: 'white'
        }
    },
    option: (styles, {data, isDisabled, isSelected, isFocused}) => {
        return {
            ...styles,
            backgroundColor: data.bgcolor,
            color: data.color
        }
    },
    multiValue: (styles, {data}) => {
        return {
            ...styles,
            backgroundColor: data.bgcolor,
            color: data.color
        }
    },
    multiValueLabel: (styles) => {
        return {
            ...styles,           
            color: 'black'
        }
    },
    multiValueRemove: (styles) => {
        return {
            ...styles,           
            color: 'orange'
        }
    },
}

const ReactSelect = () => {
    const [ops, setOpts] = useState(options)
    return (
            <>
                {/* //synchronous */}
                <label>Synchronous</label>
                <Select style={{color: 'black', backgroundColor: 'red'}}
                    options={options}
                    isMulti
                    components={animated}
                    onChange={(selectedValue) => console.log(selectedValue)}
                    closeMenuOnSelect={false}
                    defaultValue={[options[2], options[3]]}
                />

                {/* //Asynchronous */}
                <label>Asynchronous</label>
                <AsyncSelect
                    closeMenuOnSelect={false}
                    loadOptions={loadOptions}
                    isMulti
                    components={animated}
                    onChange={(selectedValue) => console.log(selectedValue)}
                    defaultOptions
                    styles={styles}
                    />         

                {/* //Create option */}
                <label>Create options</label>
                <CreateTableSelect style={{color: 'black', backgroundColor: 'red'}}
                    closeMenuOnSelect={false}
                    options={ops}    
                    onCreateOption={(inputValue) => { 
                        const newOption = { 
                            value: inputValue, 
                            label: inputValue, 
                            color: 'black', 
                            bgcolor: 'red'
                        }
                        setOpts([...ops, newOption])
                    }}    
                    styles={styles}          
                />        
            </>
       
    );
};

export default ReactSelect;