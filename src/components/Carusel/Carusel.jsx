import React from "react";
import Slider from "react-slick";
import "./carusel.css";  
import logitechBanner from '../../assets/Logitech-sluchatka-banner.jpg';
import laptopBanner from '../../assets/laptop-5673901_1280.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Carusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <div>
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={logitechBanner} alt="Logitech Banner" />
                </div>
                <div>
                    <img src={laptopBanner} alt="Laptop Banner" />
                </div>
            </Slider>
        </div>
        </div>
    );
}
