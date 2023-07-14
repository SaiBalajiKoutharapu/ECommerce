import React from 'react'
import '../components/CardsStyles.css';
import {Link} from 'react-router-dom';
import womencards from '../components/WomenCards';

function WomensWear() {
  return (
    <div className='cards-main d-flex justify-content-center align-items-center' >
         <div className='cards d-flex flex-wrap justify-content-between align-items-center'>
            {
              womencards.map((womencard,index) => {
                return(
                  <Link className='links '>
                    <div className='card'>
                      <div className='image'>
                        <img src={womencard.image}></img>
                      </div>
                      <i class="fa-regular fa-heart" ></i>
                      <div className='content'>
                        <h2 class="text-capitalize pt-2" >{womencard.brand}</h2>
                        <h4 class="text-capitalize" >{womencard.model}</h4>
                        <h5 class="text-capitalize" >price{womencard.price}</h5>
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

export default WomensWear