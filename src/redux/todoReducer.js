import { todoActionTypes } from "./todoActionTypes";

const initialState = {
    todos: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.ADD_TODO:
            return {
                todos: [...state.todos, { ...action.payload }]
            }
        case todoActionTypes.ADD_STATE:
            return {
                todos: action.payload.st
            }
        case todoActionTypes.DELETE_TODO:
            return {
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.toDeleteId)
            }
        case todoActionTypes.CHECK_TODO:
            const indexTodosItem = state.todos.findIndex((todo) => todo.id === action.payload.checkId)
            const newArr = JSON.parse(JSON.stringify(state.todos))
            newArr[indexTodosItem].done = !newArr[indexTodosItem].done
            console.log(newArr[indexTodosItem].done)
            return {
                todos: newArr
            }

        default:
            return state;

    }
}



