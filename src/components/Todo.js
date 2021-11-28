import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
//primary  error
export const Todo =()=> {
return (
<Chip 
clickable
label= 'todo item'
deleteIcon={<DeleteIcon/>}
// size='medium'
sx={{fontSize:16,padding:2.2}}
onDelete={()=>{console.log('delite')}}
icon={<CheckCircleIcon/>}
onClick={()=> {console.log('check')}}
/>
)
}

//https://mui.com/components/material-icons/#main-content  https://mui.com/api/chip/