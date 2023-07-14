import React from 'react';
import './MensContentStyles.css';

function GadgestContent() {
  return (
    <div className='mens-content d-flex justify-content-center align-items-center'>
        <div className='content-block d-flex justify-content-between align-items-center w-75'>
            <div className='items d-flex flex-column align-items-start p-4'>
              <h6>watches</h6>
              <h6>phones</h6>
              <h6>rings</h6>
              <h6>shoes</h6>
              <p>smart watch</p>
              <p>normal</p>
              <p>dailed</p>
              <p>all new</p>
              <h6>cosco watch</h6>
              <h6>fastrack</h6>
              <h6>titan</h6>
              <h6>kids</h6>
              <p>normal</p>
              <p>touch</p>
            </div>
            <div className='items d-flex flex-column align-items-start p-4'>
                <h6>rings and chains</h6>
                <p>normal chain</p>
                <p>ringed</p>
                <p>circulars</p>
                <p>rings</p>
                <p>gold rings</p>
                <p>silver</p>
                <p>coated</p>

                <h6>phones</h6>
                <p> vivo</p>
                <p>oppo</p>
                <p>samsung</p>
                <p>redmi</p>
                <p>nokia</p>
                <p>vivo v71</p>
                <p>i phone</p>
                <p>android</p>
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

            </div>
            <div className='items d-flex flex-column align-items-start p-4'>
                <h6>featured</h6>
                <p className="p" >phones under 11599</p>
                <p className="p" >watch under 1549</p>
                <p className="p" >rings under 299</p>
                <p className="p" >chains under 399</p>
            </div>
        </div>
    </div>
  )
}

export default GadgestContent