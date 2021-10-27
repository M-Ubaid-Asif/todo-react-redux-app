import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import HeaderTodo from './HeaderTodo';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducer/todolist';
import Tasks from './Tasks';
import FilterItem from './FilterItem';


const Todo = () => {

    const [todo,setTodo] = useState('')
    const dispatch = useDispatch();


    //geting task using onchange event and geting value using this function
    const handleChange = (event) => {
        setTodo(event.target.value);

    }


    useEffect(()=>{
        toast.success('Login Successfull', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme:'colored'
        })
    },[])




    // geting task on submit and adding it in state.value
    const handleSubmit = () => {
        dispatch(addItem({
            id:Math.floor(Math.random()*1000),
            task:todo,
            complete:false
        }))
        setTodo('')
    }



    return (
        <div className='todo-container'>
            <div className="todo-nav-container">

                <HeaderTodo />
            </div>
            <div className="add-task-container">
                <Box sx={{ display: "flex", alignItems: "flex-end" }} style={{ margin: '1rem 0px' }}>
                    <TextField id="input-with-sx" label="Add Task" variant="standard" onChange={handleChange} value={todo} name='task' />
                    <Fab size="small" color='primary' aria-label="add" onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                    
                </Box>
            </div>
            <FilterItem />
            <Tasks />
            <ToastContainer />
        </div>
    )
}

export default Todo
