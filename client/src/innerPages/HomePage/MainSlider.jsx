import React from 'react'
import Slider from "react-slick";
import homestyles from './Home.module.css';

const MainSlider = () => {
    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", }}
      onClick={onClick}
    />
  );
}
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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