import React, { useState } from 'react';
import './SideNavbarStyles.css';
import {FaShoePrints, FaChair } from 'react-icons/fa';
import { FiWatch } from "@react-icons/all-files/fi/FiWatch";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Login from './Login';


function SideNavbar(){

  const[toggle, setToggle] = useState(false);
  const[open, setOpen] = useState(false);
  
    return (
      <>
      <div className='side-navbar' >
        <a id="register" onClick={()=>(setOpen(!open))}  ><i class="fa-solid fa-user-plus"></i></a>
        <a id="login" onClick={()=>(setToggle(!toggle))} ><i class="fa-solid fa-right-to-bracket"></i></a>
      </div>

      <div>
        {toggle && (
            <Login 
              heading={"Welcome Back"} 
              tag={"Login Here"} 
              user={"Username"} 
              shortcut={"Register"}
              indicate={"Doesn't have an account ?"}
              button={"Login"}
              link={"Forgot Password"}
           />
        )}
      </div>

      <div>
        {open && (
            <Login 
              heading={"Welcome to ShopIn"}
              tag={"Register Here"} 
              user="Email Id" 
              shortcut={"Login"} 
              indicate={"Already have an account"}
              button={"Register"}
              link={"T&C apply"}
            />
        )}
      </div>
      </>
    )
  
}

export default SideNavbar