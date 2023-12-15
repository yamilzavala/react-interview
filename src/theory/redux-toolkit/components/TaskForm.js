import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'

const TaskForm = () => {
    const [task, setTask] = useState({title: '', description:''})
    
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({...task, id: uuid()}))
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleSubmit}>
                <input name='title' onChange={handleChange} placeholder='title'/>
                <textarea name="description" onChange={handleChange} placeholder='description'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;