import React from 'react'
import Slider from "react-slick";
import homestyles from './Home.module.css';

const MainSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className={homestyles.slider}>
            <Slider {...settings}>
                <div>
                    <h3>
                        <img src="images/banner1.jpg" alt="" srcset="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="images/banner2.jpg" alt="" srcset="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="images/banner3.jpg" alt="" srcset="" />
                    </h3>
                </div>
                <div>
                    <h3>
                        <img src="images/banner4.jpg" alt="" srcset="" />
                    </h3>
                </div>
            </Slider>
        </section>
    )
}

export default MainSlider