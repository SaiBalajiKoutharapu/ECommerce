import React from 'react';
import './WomensStyles.css';
import WomensWear from './WomensWear';
import brand1 from '../assets/brand2.svg';
import brand2 from '../assets/brand3.svg';
import brand3 from '../assets/brand4.svg';
import brand4 from '../assets/brand5.svg';
import brand5 from '../assets/brand6.svg';
import brand6 from '../assets/brand7.svg';
import brand7 from '../assets/brand8.png';
import brand8 from '../assets/brand9.png';
import brand9 from '../assets/brand10.png';
import brand10 from '../assets/brand11.png';


function Womens() {
  return (
    <div className='womens d-flex flex-column justify-content-center align-items-center' >
      <div className='womens-page d-flex flex-column justify-content-center align-items-center'>
        <div className='top d-flex flex-row justify-content-center align-items-center'>
          <div className='image'>
            <img src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=740&t=st=1688749131~exp=1688749731~hmac=626157567652f503332c8bf46869b3e01ddb7447122bd28bbdd0eab630e746ed"></img>
          </div>
          <div className='left d-flex flex-column justify-content-center align-items-center'>
            <div className='left-content'>
              <h1>get unlimited offers</h1>
              <p>upto 75%</p>
            </div>
            <div className='images d-flex flex-row flex-wrap justify-content-center align-items-center'>
              <img src={brand1}></img>
              <img src={brand2}></img>
              <img src={brand3}></img>
              <img src={brand4}></img>
              <img src={brand5}></img>
              <img src={brand6}></img>
              <img src={brand7}></img>
              <img src={brand8}></img>
              <img src={brand9}></img>
              <img src={brand10}></img>
            </div>
          </div>
        </div>

        <div className='context'>
          <h2>grab an exclusive discounts of upto 75% on selected brands</h2>
        </div>

        <label>Try fantastic collection below</label>


      

      <WomensWear/>
    
      </div>
        
    </div>
  )
}

export default Womens