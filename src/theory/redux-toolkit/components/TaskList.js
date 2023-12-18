import { useSelector, useDispatch } from "react-redux"; 
import {removeTask} from '../features/tasks/taskSlice'
import { Link } from "react-router-dom";

const TaskList = () => {
    const taskState = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeTask(id))
    }

    const renderedTasks = taskState.map((task) => (
        <div key={task.id}>            
            <h3>{task.title}</h3>
            <p>
                {task.description}
                <span style={{color: 'red'}} onClick={() => handleRemove(task.id)}> x </span>
            </p>
            <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
    ))

    return (
        <div>
            <h2>Task List</h2>
            <h2>Tasks {taskState.length}</h2>
            <Link to='/create-task'> Create Task </Link>
            {renderedTasks}
        </div>
    );
};

export default TaskList;