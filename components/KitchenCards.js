import React from 'react';
import appliciances from './KitchenCardsContent';
import './CardsStyles.css';
import {Link} from 'react-router-dom';

function KitchenCards(){
    return(
        <div className='cards-main d-flex justify-content-center align-items-center' >
         <div className='cards d-flex flex-wrap justify-content-between align-items-center'>
            {
              appliciances.map((appliance,index) => {
                return(
                  <Link className='links '>
                    <div className='card'>
                      <div className='image'>
                        <img src={appliance.image}></img>
                      </div>
                      <i class="fa-regular fa-heart" ></i>
                      <div className='content'>
                        <h2 class="text-capitalize pt-2" >{appliance.brand}</h2>
                        <h4 class="text-capitalize" >{appliance.model}</h4>
                        <h5 class="text-capitalize" >price{appliance.price}</h5>
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

export default KitchenCards