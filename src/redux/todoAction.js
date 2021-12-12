import { todoActionTypes } from "./todoActionTypes";
import { v4 as uuidv4 } from "uuid";


export const addTodo = (todoText) => ({
    type: todoActionTypes.ADD_TODO,
    payload: {
        text: todoText,
        done: false,
        id: uuidv4(),
    }
});


export const deleteTodo = (id) => ({
    type:todoActionTypes.DELETE_TODO,
    payload:{
        toDeleteId: id
    }
});

export const swithTodoState = (id) => ({
    type:todoActionTypes.SWICH_TODO,
    payload:{
        checkId: id,
    }
})

export const addedState = (state) =>({
    type:todoActionTypes.ADD_STATE,
    payload: {
        st:state
    }
})