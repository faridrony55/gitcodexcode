import React from 'react';
import shopifycourse from '../../assets/images/shopifycourse.png';
import './Banner.css';
const Banner = () => {
    return (
        <section className="banner container py-5 ">
             <img src={shopifycourse} alt="banner" className="w-100" /> 
        </section>
    );
};

export default Banner;