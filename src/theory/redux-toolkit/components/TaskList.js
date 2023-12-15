import { useSelector, useDispatch } from "react-redux"; 
import {removeTask} from '../features/tasks/taskSlice'

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
            
        </div>
    ))

    return (
        <div>
            <h2>Task List</h2>
            {renderedTasks}
        </div>
    );
};

export default TaskList;