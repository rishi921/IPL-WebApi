import React from 'react';
import './Home.css';
import banner from '../Image/banner.jpg';

function Home() {
    return (
        <div className="home-container">
            <img src={banner} style={{width: '80%'}} alt="Banner" className="banner-image" class="center"/>
            <h1>Welcome to IPL Stats!</h1>
            <p>Explore match details and add new players.</p>
        </div>
    );
}

export default Home;