import React from 'react';
import "./MensStyles.css";

import brand1 from '../assets/brand7.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.svg';
import brand6 from '../assets/brand6.svg';
import brand8 from '../assets/brand8.png';
import brand9 from '../assets/brand9.png';
import brand10 from '../assets/brand10.png';
import brand11 from '../assets/brand11.png';
import offer from '../assets/offer.png';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';


function Menswear() {
  return (
    <div className='mens-main d-flex justify-content-center align-items-center' >
      <div className='mens-page d-flex flex-column justify-content-center align-items-center'>
        <div className='top-head d-flex flex-row justify-content-center align-items-center'>
          <div className='image'>
            <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing-round-sunglasses_158538-5346.jpg?w=996&t=st=1688655718~exp=1688656318~hmac=cde8858640c7f14d0c731cd8ca22a50c59cd458faa1a25fc13bcb6c944fa97af"></img>
          </div>
          <div className='content'>
            <p>Explore</p>
            <h3 class="text-uppercase">top most brands</h3>
            <img src={offer}></img>
          </div>
        </div>

        <div className='offers-block  d-flex flex-column justify-conetnt-center align-items-center'>
          <div className='offer-block d-flex flex-column justify-conetnt-center align-items-center'>

            <div className='offer-content'>
              <h1>get exciting offers upto 50%</h1>
              <p>on selected brands</p>
            </div>

            <div className='images d-flex flex-row justify-conetnt-center align-items-center'>
              <img src={brand1}></img>
              <img src={brand2}></img>
              <img src={brand3}></img>
              <img src={brand4}></img>
              <img src={brand5}></img>
              <img src={brand6}></img>
              <img src={brand8}></img>
              <img src={brand9}></img>
              <img src={brand10}></img>
              <img src={brand11}></img>
            </div>

          </div>
        </div>

        <Cards/>

      </div>
      
    </div>
  )
}

export default Menswear