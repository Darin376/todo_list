import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo } from 'react';

// 'primary'
// 'error'

export const Todo = memo(({ done, text, handleClick, handleDelete, id }) => {
    console.log('render')
    return <Chip
        clickable
        label={text}
        icon={done ? <CheckCircleIcon /> : <CircleIcon />}
        sx={{ fontSize: 16, padding: 2.2, width: 200, }}
        deleteIcon={<DeleteIcon />}
        onClick={() => (handleClick(id))}
        onDelete={() => (handleDelete(id))} />

});