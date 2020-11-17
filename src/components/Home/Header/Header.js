import React from 'react';
import './Header.scss'
const Header = () => {
    return (
        <div>
           <div className="header-container">
               <img src="https://img.techpowerup.org/201116/rectangle-13.jpg" alt="" className="header-bg"/>
               <div className="header-sub-container">
               <h1 className="home-title mb-4">FIND YOUR HOUSE RENT</h1>
               <br/>
               <input type="text" placeholder="Search Hunts" className="search-input mr-2"/>
               <button className="search-btn">Find Now</button>
               </div>
           </div>
        </div>
    );
};

export default Header;