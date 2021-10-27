import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { userData } from '../reducer/todolist'
import { useState } from "react";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector(state => state.todolist.user)
    // console.log('===>', state)


    const handleSubmit = () => {
        
        if (username !== '' && password!=='') {
            history.push('/todo')
            dispatch(userData((username)|| '' ));
            // alert('login success full')
        
        }else{
            toast.error('username or password is empty', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme:'colored'
            })
        }
        //     dispatch(onlogin(username))
        //     history.push('/todo')
        console.log('===>', state)
    }


    return (
        <>
            <div className='parent-container'>
                <div className='login-container'>
                    <div className="login-child-con">
                        <h1 style={{ textAlign: 'center' }}><i className="fas fa-user-lock" style={{ marginRight: '.5rem', color: 'gray' }}></i></h1>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }} style={{ margin: '1rem 0px' }}>
                            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Username"
                                name='username'
                                variant="standard" onChange={(e) => setUsername(e.target.value)} />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <i className="fas fa-unlock-alt" style={{ margin: '0px .8rem .5rem 5px', color: 'gray' }}></i>
                            <TextField id="input-with-sx" label="Password" type='password'
                                name='password'
                                variant="standard" onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                        <Button variant="contained" style={{ margin: '2rem 0px 0px 70%' }} onClick={handleSubmit}>Login</Button>
                        {/* <p> i am username {state}</p> */}
                        {/* //dispatch(incrementByAmount(Number(incrementAmount) || 0)) */}
                        <ToastContainer position="top-center"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
