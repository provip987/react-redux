import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./List/task"

export default configureStore({
    reducer: {
        task: taskReducer,
    },
})