
import Stack from '@mui/material/Stack';
import { TextField, Button, Todo } from '../components';

export const TodoListPage = () => {
    const handleChange = () => {
    }
    return (
        <>
            <h1>Todo List</h1>
            <Stack
                spacing={10}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <TextField
                    handleChange={handleChange}
                    id='todo-text-input'
                    hintText='What you are going to do'
                    filedName='ToDo'
                    value='asdas'
                />
                <Button type='add' text='add' />
            </Stack>
            <Stack
                marginTop={10}
                spacing={5}
                justifyContent="center"
                alignItems="center">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </Stack>
        </>
    )

};