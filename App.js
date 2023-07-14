import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Menswear from './routefiles/Menswear';
import Womens from './routefiles/Womens';
import KidsWear from './routefiles/KidsWear';
import Home from './routefiles/Home';
import DownNavbar from './components/DownNavbar';
import Accessories from './routefiles/Accessories';
import Domestic from './routefiles/Domestic';
import Shopping from './components/Shopping';
import Wishlist from './routefiles/Wishlist';
import Cart from './routefiles/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        {/*------------------------- navbar----------------------- */}
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Menswear/>} />
        <Route path="/womens" element={<Womens/>} />
        <Route path="/kids" element={<KidsWear/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/domestic" element={<Domestic/>} />


        {/* -------------------------down navbar --------------------- */}

        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>} />
        
      </Routes>


      <Navbar/>
      <DownNavbar/>
      
    </div>
  );
}

export default App;





