import React from 'react';
import './WishlistStyles.css';
import { Link } from 'react-router-dom';

function Wishlist() {
  return (
    <div className='wishlist d-flex flex-column justify-content-center align-items-center' >
        <div className='alert d-flex flex-column justify-content-center align-items-center'>
           <p>Oops! No items are added to your wishlist</p>
           <Link className="link" to="/shopping"><button className='btn btn-dark' >shop now</button></Link>
        </div>
    </div>
  )
}

export default Wishlist