import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTask, editTask} from '../features/tasks/taskSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
    const [task, setTask] = useState({title: '', description:''})
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams();
    const taskState = useSelector(state => state.tasks)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(params.id) {
            dispatch(editTask({ ...task, id: params.id }))
        } else {
            dispatch(addTask({...task, id: uuid()}))
        }        
        navigate('/')
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(params.id) {
           setTask(taskState.find(task => task.id === params.id));
        }
    },[params])


    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleSubmit}>
                <input value={task.title} name='title' onChange={handleChange} placeholder='title'/>
                <textarea value={task.description} name="description" onChange={handleChange} placeholder='description'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;