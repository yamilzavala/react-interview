import {createSlice} from '@reduxjs/toolkit'

const initialStateTasks = [
    {
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description',
        complete: false
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Task 2 description',
        complete: false
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialStateTasks,
    reducers: {
        addTask: (state, action) => {
           return [...state, action.payload]
        },
        removeTask: (state, action) => {
            const filteredTasks = state.filter((task, idx) => task.id !== action.payload)
            return [...filteredTasks]
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
              foundTask.title = title;
              foundTask.description = description;
            }
        },
    }
})

export const {addTask, removeTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;