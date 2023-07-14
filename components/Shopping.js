import React, { useState } from 'react'
import Cards from './Cards';
import './ShoppingStyles.css';
import WomenWear from '../routefiles/WomensWear';
import KidsWear from '../routefiles/KidsWear';
import KidsCards from './KidsCards';
import AccesoryCards from './AccesoryCards';
import KitchenCards from './KitchenCards';



function Shopping() {
    const[toggle, setToggle] = useState(1);
  return (

    <div className='shopping d-flex flex-column justify-content-center align-items-center' >
        <div className='options m-1'>
            <button className={toggle === 1 ? "btn active" : "btn"} onClick={()=>(setToggle(1))} >Men</button>
            <button className={toggle === 2 ? "btn active" : "btn"} onClick={()=>(setToggle(2))}>Women</button>
            <button className={toggle === 3 ? "btn active" : "btn"} onClick={()=>(setToggle(3))}>kids</button>
            <button className={toggle === 4 ? "btn active" : "btn"} onClick={()=>(setToggle(4))}>accessories</button>
            <button className={toggle === 5 ? "btn active" : "btn"} onClick={()=>(setToggle(5))}>kitchen</button>
        </div>

        <div  className={toggle=== 1 ? "matter  active-matter" : "matter"}>
            <Cards/>
        </div>
        <div  className={toggle=== 2 ? "matter  active-matter" : "matter"}>
            <WomenWear/>
        </div>
        <div  className={toggle=== 3 ? "matter  active-matter" : "matter"}>
            <KidsCards/>
        </div>
        <div  className={toggle=== 4 ? "matter  active-matter" : "matter"}>
            <AccesoryCards/>
        </div>
        <div  className={toggle=== 5 ? "matter  active-matter" : "matter"}>
            <KitchenCards/>
        </div>




        
    </div>
  )
}

export default Shopping