import React, { useState } from 'react';
import './NavbarStyles.css';
import { FaShoppingCart,FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import MensContent from './MensContent';
import WomensContent from './WomensContent';
import KidsContent from './KidsContent';
import GadgestContent from './GadgestContent';
import Login from './Login';

function Navbar(){
    const[open, setOpen] = useState(false);
    const[toggle, setToggle] = useState(false);

    const[click, setClick] = useState(false);

    const[ShowMens, setShowMens] = useState(false);
    const[ShowWomens, setShowWomens] = useState(false);
    const[ShowKids, setShowKids] = useState(false);
    const[ShowGadgets, setShowGadgets] = useState(false);
    
 
    return (

    <div>
        <div className='nav' >
            <div className='navbar d-flex justify-content-around align-items-center w-100 p-4' >
                <div className='navbar-logo d-flex justify-content-center align-items-center'>
                    <Link className='link' to="/">ShopIn</Link>
                </div>
                <div className='navbar-items '>
                    <ul className={click ? "navbar-items active" : "navbar-items"} >
                        <li><Link className='link' to="/" >home</Link></li>
                        <li onMouseOver={()=>{setShowMens(true)}} onMouseOut={()=>{setShowMens(false)}} ><Link className='link' to="/mens" >mens</Link></li>
                        <li onMouseOver={()=>{setShowWomens(true)}} onMouseOut={()=>{setShowWomens(false)}} ><Link className='link' to="/womens" >womens</Link></li>
                        <li onMouseOver={()=>{setShowKids(true)}} onMouseOut={()=>{setShowKids(false)}} ><Link className='link' to="/kids" >kids</Link></li>
                        <li onMouseOver={()=>{setShowGadgets(true)}} onMouseOut={()=>{setShowGadgets(false)}} ><Link className='link' to="/accessories" >accessories</Link></li>
                        <li onMouseOver={()=>{setShowGadgets(true)}} onMouseOut={()=>{setShowGadgets(false)}} ><Link className='link' to="/domestic" >kitchen</Link></li>
                    </ul>
                </div>
                <div className='navbar-search'>
                    <input type="text" placeholder='search here' ></input>
                    <label> <FaSearch/></label>
                </div>
                <div className='icons'>
                    <Link className='link' to="/wishlist" ><a><i class="fa-solid fa-heart"></i></a></Link>
                    <Link className='link' to="cart" ><a><i class="fa-solid fa-bag-shopping"></i></a></Link>
                    <Link className='link' ><a onClick={()=>(setOpen(!open))}><i class="fa-solid fa-user"></i></a></Link>
                    <Link className='link' ><a onClick={()=>(setToggle(!toggle))} ><i class="fa-solid fa-right-to-bracket"></i></a></Link>
                </div>
                <div className='navbar-icons' onClick={()=>{setClick(!click)}}>
                    <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            
            </div>
        </div>


        <div>
            {ShowMens && (
                <MensContent/>
            )}
        </div>
        <div>
            {ShowWomens && (
                <WomensContent/>
            )}
        </div>
        <div>
            {ShowKids && (
                <KidsContent/>
            )}
        </div>
        <div>
            {ShowGadgets && (
                <GadgestContent/>
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


    </div>
      )
  
}

export default Navbar