import { createSlice } from '@reduxjs/toolkit';
import { Exdata } from '../exampleData';

const initialState = {
    todoList: Exdata
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },

        setCheck: (state, action) => {
            state.todoList.forEach(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            })
        },

        deleteTodo: (state, action) => {
            let filter = state.todoList.filter(item => 
                item.id !== action.payload
            )
            state.todoList = filter
        }
    }
});


export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todos.todoList

export default todoSlice.reducer