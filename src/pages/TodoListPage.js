import { useEffect, useState ,useCallback} from 'react';
import Stack from '@mui/material/Stack';
import { Button, TextField, Todo } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../redux/todoSelectors';
import { addedState, addTodo, swithTodoState, deleteTodo } from '../redux/todoAction';
import { todoActionTypes } from '../redux/todoActionTypes';

export const TodoListPage = () => {
    const [todoText, setTodoText] = useState('');
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();

    // useEffect(() => {

    //     let local = JSON.parse(localStorage.getItem('todos'))
    //     console.log(local)
    //     dispatch(addedState(local))
    // }, [])

    // useEffect(() => {
    //     let td = JSON.stringify(todos)
    //     localStorage.setItem('todos', td)

    // }, [todos])

    const handleChange = ({ target: { value } }) => {
        setTodoText(value);
    }

    const addTodoHandler = () => {
        // add todo to store
        dispatch(addTodo(todoText));
    }

    const onTodoClick = useCallback(
    (id) => {
        dispatch(swithTodoState(id))
    },[dispatch,swithTodoState])


    const onTodoDelete = useCallback(
    (id) => {
        dispatch(deleteTodo(id));
    },[dispatch,deleteTodo])

    return (
        <>
            <h1>TODOLIST</h1>
            <Stack
                direction="row"
                spacing={10}
                alignItems="center"
                justifyContent="center">
                <TextField
                    handleChange={handleChange}
                    id='todo-text-input'
                    hintText='What you are name?'
                    fieldName='TODO'
                    value={todoText}
                />
                <Button type='add' text='add' handlClick={addTodoHandler} />
            </Stack>
            <Stack
                spacing={10}
                alignItems="center"
                justifyContent="center"
                marginTop={10}>
                {todos.map((todoData) =>
                    <Todo
                        {...todoData}
                        handleClick={onTodoClick}
                        handleDelete={onTodoDelete}
                        key={todoData.id} />)}
            </Stack>
        </>
    )
}