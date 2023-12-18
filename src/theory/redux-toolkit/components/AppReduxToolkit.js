import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Routes, Route, Link } from "react-router-dom";

const AppReduxToolkit = () => {
    
    return (
        <div>            
                <Routes>
                    <Route path="/" element={<TaskList/>}/>
                    <Route path="/create-task" element={<TaskForm/>}/>
                    <Route path="/edit-task/:id" element={<TaskForm/>}/>
                </Routes>              
        </div>
    );
};

export default AppReduxToolkit;