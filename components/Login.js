import React, { useState } from 'react';
import './LoginStyles.css';
import { FcGoogle} from 'react-icons/fc';


function Login(props) {
    const[toggle, setToggle] = useState(false)
    const[cancel, setCancel] = useState(false)
  return (

      <div className="login d-flex flex-column justify-content-center align-items-center" >
        <h2>{props.heading}</h2>
        <label>{props.tag}</label>



        <div className='login-form d-flex flex-column align-items-center pt-4 '>
            <div className='username d-flex flex-column justify-content-center align-items-start'>
                <label>{props.user}</label>
                <i class="fa-solid fa-user"></i><input type="text"></input>
            </div>
            <div className='username d-flex flex-column justify-content-center align-items-start'>
                <label>password</label>
                <i class={toggle ? "fa-solid fa-eye" :"fa-solid fa-eye-slash"} onClick={()=>{setToggle(!toggle)}} ></i>
                <input type={toggle ? "text" : "password"}></input>
            </div>
            <div className='forgot-password  d-flex flex-row justify-content-center align-items-start'>
                <input type="checkbox"></input><p>Remember password</p>
                <a>{props.shortcut}</a>
            </div>
            <div className='submit'>
                <button className=' btn btn-dark' >{props.button}</button>
            </div>
            <div className='register  d-flex flex-row justify-content-between align-items-start'>
                <p>{props.indicate}</p>
                <a>{props.shortcut}</a>
            </div>
            <label>or</label>
            <div className='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i className='google' ><FcGoogle/></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-solid fa-envelope"></i>
            </div>
        </div>
     </div>
     

  )
}

export default Login