import React, { useState } from 'react';
import './DownNavbarStyles.css';
import Login from './Login';
import { Link } from 'react-router-dom';


function DownNavbar() {

  const[toggle, setToggle] = useState(false);
  const[open, setOpen] = useState(false);

  return (

    <>
    <div className='downnavbar d-flex flex-row justify-content-around align-items-center'>
        <Link className='link' to="/" ><a><i class="fa-solid fa-house"></i></a></Link>
        <Link className='link' to="/shopping" ><a><i class="fa-sharp fa-solid fa-cart-shopping"></i></a></Link>
        <Link className='link' to="/wishlist" ><a><i class="fa-solid fa-heart"></i></a></Link>
        <Link className='link' to="cart" ><a><i class="fa-solid fa-bag-shopping"></i></a></Link>
        <Link className='link' ><a onClick={()=>(setOpen(!open))}><i class="fa-solid fa-user"></i></a></Link>
        <Link className='link' ><a onClick={()=>(setToggle(!toggle))} ><i class="fa-solid fa-right-to-bracket"></i></a></Link>
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

export default DownNavbar