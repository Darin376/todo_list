import Btn from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const iconTypes = {
    delete:{
        component: DeleteIcon,
        variant: 'outlined',
    },
    add:{
        component: SendIcon,
        variant: 'contained',
    },

};

export const Button = ({type,text,handlClick}) => {
    const Icon = iconTypes[type].component;
    return <Btn 
        startIcon={<Icon/>}
        variant = {iconTypes[type].variant}
        onClick = {handlClick}>
             {text}
        </Btn>
    
}