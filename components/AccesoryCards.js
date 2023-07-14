import React from 'react';
import accessories from '../components/AccesoryCardsContent';
import './CardsStyles.css';
import {Link} from 'react-router-dom';

function AccesoryCards() {
  return (
    <div>
         <div className='cards-main d-flex justify-content-center align-items-center' >
         <div className='cards d-flex flex-wrap justify-content-between align-items-center'>
            {
              accessories.map((accesory,index) => {
                return(
                  <Link className='links '>
                    <div className='card'>
                      <div className='image'>
                        <img src={accesory.image}></img>
                      </div>
                      <i class="fa-regular fa-heart" ></i>
                      <div className='content'>
                        <h2 class="text-capitalize pt-2" >{accesory.brand}</h2>
                        <h4 class="text-capitalize" >{accesory.model}</h4>
                        <h5 class="text-capitalize" >price{accesory.price}</h5>
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
    </div>
  )
}

export default AccesoryCards