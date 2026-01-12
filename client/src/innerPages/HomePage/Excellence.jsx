import React from 'react'
import homestyles from './Home.module.css';
import Slider from "react-slick";

const Excellence = () => {
    var settings = {
        dots: false,
        infinite: true,
        rows: 2,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        nextArrow: false,
    prevArrow: false
    };
  return (
    <section className={homestyles.excellence}>
        <div className="container">
            <h1>Centres of Excellence</h1>
            <p>
                To ensure you get the affordable excellence you deserve, we bring you an internationally trained and globally acclaimed physician, state-of-the-art technology, clinical innovation, world-class infrastructure, and outstanding quality. All these qualified for Hospital NABH registrations.
            </p>
            <div className="row d-none d-lg-flex">
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-3.svg" alt="" />
                        </div>
                        <h3>General Medicine</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-4.svg" alt="" />
                        </div>
                        <h3>General Surgery</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-5.svg" alt="" />
                        </div>
                        <h3>Urology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-6.svg" alt="" />
                        </div>
                        <h3>Gynecology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-7.svg" alt="" />
                        </div>
                        <h3>Orthopedics</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-8.svg" alt="" />
                        </div>
                        <h3>Gastroenterology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-9.svg" alt="" />
                        </div>
                        <h3>Nephrology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-10.svg" alt="" />
                        </div>
                        <h3>Cardiac</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-11.svg" alt="" />
                        </div>
                        <h3>Neurology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-12.svg" alt="" />
                        </div>
                        <h3>Plastic Surgery</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-13.svg" alt="" />
                        </div>
                        <h3>Fertility and IVF</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-14.svg" alt="" />
                        </div>
                        <h3>Paediatrics</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-15.svg" alt="" />
                        </div>
                        <h3>ENT</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-16.svg" alt="" />
                        </div>
                        <h3>Critical Care Unit</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-17.svg" alt="" />
                        </div>
                        <h3>Oncology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-18.svg" alt="" />
                        </div>
                        <h3>Nutrition & Dietetic</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-19.svg" alt="" />
                        </div>
                        <h3>Anesthesiology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-20.svg" alt="" />
                        </div>
                        <h3>Dentistry</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-21.svg" alt="" />
                        </div>
                        <h3>Pain Management</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-22.svg" alt="" />
                        </div>
                        <h3>Pathology</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-23.svg" alt="" />
                        </div>
                        <h3>Chest Medicine</h3>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-24.svg" alt="" />
                        </div>
                        <h3>Diabetology</h3>
                    </div>
                </div>
            </div>
            <div className='d-lg-none'>
                 <Slider {...settings}>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-3.svg" alt="" />
                        </div>
                        <h3>General Medicine</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-4.svg" alt="" />
                        </div>
                        <h3>General Surgery</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-5.svg" alt="" />
                        </div>
                        <h3>Urology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-6.svg" alt="" />
                        </div>
                        <h3>Gynecology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-7.svg" alt="" />
                        </div>
                        <h3>Orthopedics</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-8.svg" alt="" />
                        </div>
                        <h3>Gastroenterology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-9.svg" alt="" />
                        </div>
                        <h3>Nephrology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-10.svg" alt="" />
                        </div>
                        <h3>Cardiac</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-11.svg" alt="" />
                        </div>
                        <h3>Neurology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-12.svg" alt="" />
                        </div>
                        <h3>Plastic Surgery</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-13.svg" alt="" />
                        </div>
                        <h3>Fertility and IVF</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-14.svg" alt="" />
                        </div>
                        <h3>Paediatrics</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-15.svg" alt="" />
                        </div>
                        <h3>ENT</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-16.svg" alt="" />
                        </div>
                        <h3>Critical Care Unit</h3>
                    </div>
                </div>
                <div>
                     <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-17.svg" alt="" />
                        </div>
                        <h3>Oncology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-18.svg" alt="" />
                        </div>
                        <h3>Nutrition & Dietetic</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-19.svg" alt="" />
                        </div>
                        <h3>Anesthesiology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-20.svg" alt="" />
                        </div>
                        <h3>Dentistry</h3>
                    </div>
                </div>
                <div>
                     <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-21.svg" alt="" />
                        </div>
                        <h3>Pain Management</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-22.svg" alt="" />
                        </div>
                        <h3>Pathology</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-23.svg" alt="" />
                        </div>
                        <h3>Chest Medicine</h3>
                    </div>
                </div>
                <div>
                    <div className="box mb-5">
                        <div className='text-center'>
                            <img src="images/exeLogo/svgexport-24.svg" alt="" />
                        </div>
                        <h3>Diabetology</h3>
                    </div>
                </div>
            </Slider>
            </div>
        </div>
    </section>
  )
}

export default Excellence