import React from 'react';
import kids from './KidsCardsContent';
import './CardsStyles.css';
import {Link} from 'react-router-dom';

function KidsCards() {
  return (
    <div className='cards-main d-flex justify-content-center align-items-center' >
        
         <div className='cards d-flex flex-wrap justify-content-between align-items-center'>
            {
              kids.map((kid,index) => {
                return(
                  <Link className='links '>
                    <div className='card'>
                      <div className='image'>
                        <img src={kid.image}></img>
                      </div>
                      <i class="fa-regular fa-heart" ></i>
                      <div className='content'>
                        <h2 class="text-capitalize pt-2" >{kid.brand}</h2>
                        <h4 class="text-capitalize" >{kid.model}</h4>
                        <h5 class="text-capitalize" >price{kid.price}</h5>
                      </div>
                      <div className='addtocart'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </Link> 
                )
              })
            }
        </div>
    </div>
  )
}

export default KidsCards