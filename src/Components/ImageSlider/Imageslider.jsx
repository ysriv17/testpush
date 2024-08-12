import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images , className }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div className={`w-4/5 mx-auto text-center text-black ${className}`}>
            <Slider {...settings} >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} className=" h-auto mx-auto lg:min-h-[80vh] lg:max-h-[80vh] lg:min-w-[40vw] lg:max-w-[40vw]  sm:min-h-[50vh] sm:max-h-[50vh] sm:min-w-[40vw] sm:max-w-[40vw]
        md:min-h-[60vh] md:max-h-[60vh] md:min-w-[70vw] md:max-w-[70vw]" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;