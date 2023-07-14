import React from 'react'
import "./MensStyles.css";
import Cards from '../components/Cards';
import './KidsWearStyles.css';
import KidsCards from '../components/KidsCards';


function KidsWear() {
  return (
  <div className='kids-main d-flex flex-column justify-content-center align-items-center w-100'>

    <div className='kids-page d-flex flex-column justify-content-center align-items-center w-100'>
      <div className='head d-flex flex-row justify-content-center align-items-center w-100'>
        <img src="https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_155003-17314.jpg?w=1060&t=st=1688753058~exp=1688753658~hmac=df374f67d47fee4cb8b8595c0ad025f7f3bd8e63f52405f8e00d0c0d1fd0e772"></img>
        <img src="https://img.freepik.com/free-photo/funny-happy-6-years-old-girl-stripped-dress-wearing-round-orange-glasses-looking-away-with-charming-smile-beige-background_291650-1107.jpg?w=1060&t=st=1688753192~exp=1688753792~hmac=79d662bfb3bd6c38a6edfcf540a620a931a93cb0112ae8271ed07924dd0c1f58"></img>
      </div>
    </div>

    <h1>Try all new stylish collections from top brands</h1>
    <p>Grab unlimited combo offers below</p>

    <KidsCards/>
  </div>
  )
}

export default KidsWear