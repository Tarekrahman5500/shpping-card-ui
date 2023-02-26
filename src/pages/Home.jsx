import React from 'react';
import Navbar from "../components/navbar.jsx";
import Announcement from "../components/announcement.jsx";
import Slider from "../components/slider.jsx";

const Home = () => {
    return (
        <div>
            <Announcement/>
           <Navbar/>
            <Slider/>
        </div>
    );
};

export default Home;