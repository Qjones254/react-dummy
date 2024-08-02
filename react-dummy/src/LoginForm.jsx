import React from "react";
import'./LoginForm.css'
import { FaUser,FaLock } from "react-icons/fa";
const LoginForm=()=>{
    return(
        <div className='wrapper'> 
     
     <form action="">
        <h1>Login</h1>
        <div className='input-box'>
            <input type="text" placeholder='Username' />
            <FaUser className='icon'/>
        </div>
        <div className='input-box'>
            <input type="text" placeholder='password' />
            <FaLock className='icon' />
        </div>
        <div className='remember'>
            <a href="#">Forgot Password</a>
            </div>
            /*<div> < button type='submit'>Login</button>
        </div>
     </form>

        </div>
    )
}
export default LoginForm;