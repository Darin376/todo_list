import { FILTER_TYPE } from "../constans/FilterConstans";
import { todoActionTypes } from "./todoActionTypes";

const initialState = {
    todos: [],
    filterType:FILTER_TYPE.ALL
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
        case todoActionTypes.SWITCH_TODO:
            // const indexTodoItem = state.todos.findIndex(({id}) =>id === action.payload.checkId);
            // const newArr = JSON.parse(JSON.stringify(state.todos))
            // newArr[indexTodoItem].done = !newArr[indexTodoItem].done
            return {
                todos: state.todos.map((todo) => ({
                    ...todo,
                    done: todo.id === action.payload.checkId ? !todo.done : todo.done
                }))
            }
        default:
            return state;
    }
}