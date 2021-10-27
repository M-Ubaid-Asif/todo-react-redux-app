import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteItem, updateTodos } from '../reducer/todolist';
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const Tasks = () => {
    const allTasks = useSelector(state => state.todolist.value);
    // const [check, setcheck] = useState('')
    const dispatch = useDispatch();
    const [oldTask, setOldTask] = useState('')
    const [newid, setNewId] = useState('')
    const [editTask, setEditTask] = useState('')
    const [open, setOpen] = React.useState(false);
    // const [state,setState] = useState('')
    const [checkLine, setCheckLine] = useState({})
    const [taskDone, setTaskDone] = useState({
        line: '',
    })



   






    const handleOpen = (id, oldTask) => {
        setNewId(id)
        setOldTask(oldTask)
        setOpen(true);
        console.log(id, oldTask)
    }
    const handleClose = () => setOpen(false);


    const handleInput = (e) => {
        setEditTask(e.target.value)
    }


    // updating task
    const update = () => {
        // setState(})
        dispatch(updateTodos({ id: newid, task: editTask }));
        setOpen(false)
    }



    // --------------------Function for Done task----------------------

    function doneTask(index) {

        taskDone.line = 'line-through'
        setTaskDone(taskDone)

        setCheckLine({ ...checkLine, [index]: !checkLine[index] })

    }


    const taskCompleteStyle = {
        'text-decoration': taskDone.line,
        'padding': '0 15px 0 15px',
        'color' : 'gray'
    }
    return (
        <div className='show-tasks-container'>

            {
                allTasks.map((ele, index) => {
                    let taskSrNo = index + 1
                    return (
                        <Card sx={{ minWidth: 275 }} className='task-card'>
                            <CardContent>
                                <div className="task-data">
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Task {taskSrNo}
                                    </Typography>
                                    <div style={{ height: '50px' }}>
                                        
                                        {

                                            checkLine[index] ? <h4><span style={taskCompleteStyle}> {ele.task} </span>  </h4> : <h4 class="card-title">{ele.task}</h4>
                                        }






                                    </div>


                                    <div className="btn-container" style={{ marginTop: '2rem' }}>


                                        <Fab size='small' color="primary" aria-label="edit" style={{ marginLeft: '.5rem' }} onClick={() => handleOpen(ele.id, ele.task)}>
                                            <EditIcon />
                                        </Fab>



                                        <Fab size='small' color="inherit" aria-label="edit" style={{ marginLeft: '1rem' }} onClick={() => dispatch(deleteItem(ele.id))}>
                                            <DeleteIcon />
                                        </Fab>
                                        <span title="Done" onClick={() => doneTask(index)} style={{ 'cursor': 'pointer','color': 'green'}} className="mx-2"> <CheckCircleOutlineIcon style={{'fontSize':'45px','marginLeft':'1rem'}}/>  </span>

                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })
            }


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    
                    <TextField id="input-with-sx" label="Edit Task" variant="standard" defaultValue={oldTask} name='task' onChange={handleInput} />
                    <Fab size="small" color='primary' aria-label="add" onClick={() => update()}>
                        <AddIcon />
                    </Fab>
                </Box>
            </Modal>
            
        </div>
    )
}

export default Tasks


