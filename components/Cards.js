import React from 'react';
import mencards from '../components/MensCards';
import './CardsStyles.css';
import {Link} from 'react-router-dom';

function Cards() {
  
  
  return (
    <div className='cards-main d-flex justify-content-center align-items-center' >
         <div className='cards d-flex flex-wrap justify-content-between align-items-center'>
            {
              mencards.map((mencard,index) => {
                return(
                  <Link className='links '>
                    <div className='card' key={mencard.id}>
                      <div className='image'>
                        <img src={mencard.image}></img>
                      </div>
                      <i class="fa-regular fa-heart" ></i>
                      <div className='content'>
                        <h2 class="text-capitalize pt-2" >{mencard.brand}</h2>
                        <h4 class="text-capitalize" >{mencard.model}</h4>
                        <h5 class="text-capitalize" >{mencard.price}$</h5>
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

export default Cards