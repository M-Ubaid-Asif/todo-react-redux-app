import { configureStore } from "@reduxjs/toolkit";
import todolist from '../reducer/todolist';


export const store = configureStore({
    reducer: {
       todolist
    },
})