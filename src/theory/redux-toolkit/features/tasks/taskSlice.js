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
        edidTask: (state, action) => {
            const findTask = state.find(task => task.id === action.payload.id)
            findTask = {...action.payload};
            const filteredState = state.filter(task => task.id !== action.payload.id)
            return [...filteredState, findTask]
        }
    }
})

export const {addTask, removeTask, edidTask} = taskSlice.actions;
export default taskSlice.reducer;