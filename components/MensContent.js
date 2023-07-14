import React from 'react';
import './MensContentStyles.css';



function MensContent() {
  return (
    <div className='mens-content d-flex justify-content-center align-items-center'>
        <div className='content-block d-flex justify-content-between align-items-center w-75'>
            <div className='items d-flex flex-column align-items-start p-4'>
              <h6>clothing</h6>
              <h6>footwear</h6>
              <h6>accessories</h6>
              <h6>all thats new</h6>
              <p>clothing</p>
              <p>footwear</p>
              <p>accessories</p>
              <p>all thats new</p>
              <h6>shoain gold</h6>
              <h6>alus size</h6>
              <h6>grooming</h6>
              <h6>festival</h6>
              <p>kurtas</p>
              <p>jackets</p>
            </div>
            <div className='items d-flex flex-column align-items-start p-4'>
                <h6>western wear</h6>
                <p>jackets</p>
                <p>jeans</p>
                <p>kurtas</p>
                <p>shirts</p>
                <p>hoodies</p>
                <p>sweatshirts</p>
                <p>t shirts</p>
                <p>track pants</p>

                <h6>footwear</h6>
                <p>casual shoes</p>
                <p>flip flops</p>
                <p>sneakers</p>
                <p>boots</p>
                <p>loafers</p>
                <p>sandals</p>
                <p>flips</p>
                <p>sports shoes</p>
            </div>
            <div className='items d-flex flex-column align-items-start p-4'>
                <h6>Accessories</h6>
                <p>backpacks</p>
                <p>bags</p>
                <p>chains</p>
                <p>purse</p>
                <p>belts</p>
                <p>rings</p>
                <p>socks</p>
                <p>watches</p>

                <h6>jewewllery</h6>
                <p>rings</p>
                <p>chains</p>
                <p>silver</p>
                <h6>innerwear</h6>
                <p>briefs</p>
                <p>trunks</p>
                <p>vests</p>
                

            </div>
            <div className='items d-flex flex-column align-items-start p-4'>
                <h6>featured</h6>
                <p className="p" >bags under 599</p>
                <p className="p" >footwear under 1149</p>
                <p className="p" >jeans under 1199</p>
                <p className="p" >shorts under 399</p>
                <h6>kids</h6>
                <p className="p" >toys</p>
                <p className="p" >pampers</p>
                <p className="p" >clothing</p>

            </div>
        </div>
    </div>
  )
}

export default MensContent