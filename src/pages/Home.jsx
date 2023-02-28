import React from 'react';
import Navbar from "../components/navbar.jsx";
import Announcement from "../components/announcement.jsx";
import Slider from "../components/slider.jsx";
import Categories from "../components/categories.jsx";
import Products from "../components/products.jsx";
import NewsLetter from "../components/newsLetter.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
    return (
        <div>
            <Announcement/>
           <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;