import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Navbar from './components/Navbar';
import './App.css';
import carImage from './img/car.png';

import Micro from './img/Micro.png'
import Coupe from './img/Coupe.png'
import Cabriolet from './img/Cabriolet.png'
import Sedan from './img/Sedan.png'
import Suv from './img/Suv.png'
import Blue_Ferrari from './img/Blue_Ferrari.png'
import Red_Ferrari from './img/Red_Ferrari.png'
import Orange_Ferrari from './img/Orange_Ferrari.png'
import White_Ferrari from './img/White_Ferrari.png'
import Rolls_Royce from './img/Rolls_Royce.png'
import Car_bg from './img/Car_bg.png'
import Audi from './img/Audi.png'
import Ford_Explorer from './img/Ford_Explorer.png'
import Ford_Transit from './img/Ford_Transit.png'
import New_GLC from './img/New_GLC.png'
import Corolla from './img/Corolla.png'
import Range_Rover  from './img/Range_Rover.png'
import Mileage from './img/Mileage.png'
import Fuel from './img/Fuel.png'
import Gear from './img/Gear.png'
import Interior from './img/Interior.png'
import Sample from './img/Sample.png'
import Interior_Gear from './img/Interior_Gear.png'

import McLaren_Yellow from './img/McLaren_Yellow.png'
import McLaren_RedBlack from './img/McLaren_RedBlack.png'
import McLaren_Red from './img/McLaren_Red.png'
import McLaren_Cyan from './img/McLaren_Cyan.png'
import McLaren_Black from './img/McLaren_Black.png'
import McLaren_Blue from './img/McLaren_Blue.png'
import McLaren_BlackOrange from './img/McLaren_BlackOrange.png'
const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        McLaren_Yellow,
        McLaren_RedBlack,
        McLaren_Red,
        McLaren_RedBlack,
        McLaren_Cyan,
        McLaren_Black,
        McLaren_Blue,
        McLaren_BlackOrange,
        
    ];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change 3000 to the desired time in milliseconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);
        
        useEffect(()=>{
            $(window).on('scroll', function(){
                const scrollTop = $(window).scrollTop();
                const container1Offset = $('#container1Row').offset().top - $(window).height() + 200;

                if(scrollTop > container1Offset){
                    $('#container1-descriptionCol').addClass('slide-in-left');
                    $('#interior-img1Col').addClass('slide-in-right');
                }

                const Container2Offset = $('#container2Row').offset().top - $(window).height() + 200;
                if(scrollTop > Container2Offset){
                    $('#container2-descriptionCol').addClass('slide-in-right');
                    $('#interior-img2Col').addClass('slide-in-left');
                }
            });
            return () => {
                $(window).off('scroll');
            };
        }, []);

    return (
        <div id='body'>
            <Navbar />
            <div className='container' id='main'>
                <h1 id='text1'>Find Your<br />Dream Car</h1>
                <div className="row align-items-center">
                    <div className="col-md-6 text-content">
                        <h2 id='text2'>Go Limitless.</h2>
                        <button className="animated-button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="arr-2"
                                viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                            </svg>
                            <span className="text">Read More</span>
                            <span className="circle" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="arr-1"
                                viewBox="0 0 24 24"
                            >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='car-image-overlay'>
                <img src={carImage} alt='Car' className='car-image-stacked' />
            </div>
            <div className="button-container">
                <center>
              <button className='button' id='option'><img src={Micro} alt="Micro" className="button-image" /></button>
              <button className='button' id='option'><img src={Coupe} alt="Coupe" className="button-image" /></button>
              <button className='button' id='option'><img src={Cabriolet} alt="Cabriolet" className="button-image" /></button>
              <button className='button' id='option'><img src={Sedan} alt="Sedan" className="button-image" /></button>
              <button className='button' id='option'><img src={Suv} alt="Suv" className="button-image" /></button>

              </center>
            </div>
            
            <div className="car-categories-container">
                <h1 className='title' id='text3'>Top Categories</h1>
                <div className="tabs">
                    <button className="tab active">In stock</button>
                    <button className="tab">Used Cars</button>
                    <button className="tab">Any Modals</button>
                    <button className="tab">Any Motors</button>
                    <button className="tab">All Prices</button>
                </div>
                <hr/>
                <div className="row align-items-center">
                    <div className='car-bg'>
                        <img src={Car_bg} alt='Car Background' className='car-bg' />
                        
                        <div className="rolls-royce-overlay">
                            <img src={Rolls_Royce} alt="Rolls Royce" className="rolls-royce-overlay" />
                        </div>
                    </div> 
                    <div className="col-md-3 text-content">
                        <div className="featured-car-info-overlay">
                            <h2 className='info-stack'>Rolls Royce<br/>Wraith</h2>
                            {/* <button className="learn-more-button-stack">Learn More</button> */}
                            <button className="learn-more-button-stack">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="arr-2"
                                viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                            </svg>
                            <span className="text">Learn More</span>
                            <span className="circle" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="arr-1"
                                viewBox="0 0 24 24"
                            >
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
                

                <div className='container-show'>
                    <div className="row">
                        
                        <div className="col-md-4">
                        <div class="car-card">
                            <img src={Ford_Transit} alt="Ford Transit" class="car-image"/>
                            <div class="car-details">
                            <h3 id="car-name">Ford Transit - 2021</h3>
                            <h3 id="car-description">4.0 D5 PowerPulse Momentum 5dr</h3>
                            <hr id="solo"/>
                            <div className='row featureRow'>
                                <div className='col featureCol'>
                                    <img src={Mileage} alt='Mileage' className='feature-img'/>
                                    <h3 id="car-feature">2500 Miles</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Fuel} alt='Fuel' className='feature-img'/>
                                    <h3 id="car-feature">Petrol</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Gear} alt='Gear' className='feature-img'/>
                                    <h3 id="car-feature">Automatic</h3>
                                </div>
                            </div>
                            <hr id="solo"/>
                            <div className='row priceRow'>
                                <div className='col priceCol'>
                                <h3 id="car-price">$22,000</h3>
                                </div>
                                <div className='col linkCol'>
                                    <a href='www.google.com'>View Detail</a>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4">
                        <div class="car-card">
                            <img src={New_GLC} alt="New GLC" class="car-image"/>
                            <div class="car-details">
                            <h3 id="car-name">New GLC – 2023</h3>
                            <h3 id="car-description">4.0 D5 PowerPulse Momentum 5dr</h3>
                            <hr id="solo"/>
                            <div className='row featureRow'>
                                <div className='col featureCol'>
                                    <img src={Mileage} alt='Mileage' className='feature-img'/>
                                    <h3 id="car-feature">25 Miles</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Fuel} alt='Fuel' className='feature-img'/>
                                    <h3 id="car-feature">Deisel</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Gear} alt='Gear' className='feature-img'/>
                                    <h3 id="car-feature">Automatic</h3>
                                </div>
                            </div>
                            <hr id="solo"/>
                            
                            <div className='row priceRow'>
                                <div className='col priceCol'>
                                    <h3 id="car-price">$95,000</h3>
                                </div>
                                <div className='col linkCol'>
                                    <a href='www.google.com'>View Detail</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4">
                        <div class="car-card">
                            <img src={Audi} alt="Audi A6" class="car-image"/>
                            <div class="car-details">
                            <h3 id="car-name">Audi A6 3.5 – New</h3>
                            <h3 id="car-description">4.0 D5 PowerPulse Momentum 5dr</h3>
                            <hr id="solo"/>
                            <div className='row featureRow'>
                                <div className='col featureCol'>
                                    <img src={Mileage} alt='Mileage' className='feature-img'/>
                                    <h3 id="car-feature">100 Miles</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Fuel} alt='Fuel' className='feature-img'/>
                                    <h3 id="car-feature">Petrol</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Gear} alt='Gear' className='feature-img'/>
                                    <h3 id="car-feature">Automatic</h3>
                                </div>
                            </div>
                            <hr id="solo"/>
                            <div className='row priceRow'>
                                <div className='col priceCol'>
                                <h3 id="car-price">$58,000</h3>
                                </div>
                                <div className='col linkCol'>
                                    <a href='www.google.com'>View Detail</a>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4">
                        <div class="car-card">
                            <img src={Corolla} alt="Corolla Altis" class="car-image"/>
                            <div class="car-details">
                            <h3 id="car-name">Corolla Altis – 2023</h3>
                            <h3 id="car-description">4.0 D5 PowerPulse Momentum 5dr</h3>
                            <hr id="solo"/>
                            <div className='row featureRow'>
                                <div className='col featureCol'>
                                    <img src={Mileage} alt='Mileage' className='feature-img'/>
                                    <h3 id="car-feature">15000 Miles</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Fuel} alt='Fuel' className='feature-img'/>
                                    <h3 id="car-feature">Petrol</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Gear} alt='Gear' className='feature-img'/>
                                    <h3 id="car-feature">CVT</h3>
                                </div>
                            </div>
                            <hr id="solo"/>
                            
                            <div className='row priceRow'>
                                <div className='col priceCol'>
                                <h3 id="car-price">$45,000</h3>
                                </div>
                                <div className='col linkCol'>
                                    <a href='www.google.com'>View Detail</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4">
                        <div class="car-card">
                            <img src={Range_Rover} alt="Range Rover" class="car-image"/>
                            <div class="car-details">
                            <h3 id="car-name">Ford Explorer 2023</h3>
                            <h3 id="car-description">4.0 D5 PowerPulse Momentum 5dr</h3>
                            <hr id="solo"/>
                            <div className='row featureRow'>
                                <div className='col featureCol'>
                                    <img src={Mileage} alt='Mileage' className='feature-img'/>
                                    <h3 id="car-feature">10 Miles</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Fuel} alt='Fuel' className='feature-img'/>
                                    <h3 id="car-feature">Diesel</h3>
                                </div>
                                <div className='col featureCol'>
                                    <img src={Gear} alt='Gear' className='feature-img'/>
                                    <h3 id="car-feature">Automatic</h3>
                                </div>
                            </div>
                            <hr id="solo"/>
                            <div className='row priceRow'>
                                <div className='col priceCol'>
                                <h3 id="car-price">$35,000</h3>
                                </div>
                                <div className='col linkCol'>
                                    <a href='www.google.com'>View Detail</a>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>

                    </div>
                </div>


                
            </div>
            <br/>
                <h1 id='text4'>Our Services</h1>
                    <div className='row' id='container1Row'>
                        <div className='col-md-5' id='container1-descriptionCol'>
                            <h2>All Brands</h2>
                            <h3>Discover a wide range of top car brands, from luxury to economy.
                                Whether you're seeking your dream car or a reliable daily driver, we have something for everyone. 
                                Start your journey with us and find the perfect vehicle to match your lifestyle!</h3>
                            <button>Lear More</button>
                        </div>
                        <div className='col-md-7' id='interior-img1Col'>
                            <img src={Interior} alt='Interior' id='interior-img1'></img>
                        </div>
                    </div>
                    <div className='row' id='container2Row'>
                        <div className='col-md-7' id='interior-img2Col'>
                            <img src={Interior_Gear} alt='Interior' id='interior-img2'></img>
                        </div>
                        <div className='col-md-5' id='container2-descriptionCol'>
                        <h2>Economy Cars</h2>
                        <h3>Discover affordable economy cars that offer efficiency and reliability. Perfect for daily commutes or weekend getaways, these vehicles ensure great mileage without breaking the bank.</h3>
                        <h3>Join our satisfied customers and experience the perfect blend of value and performance!</h3>
                        <button>Learn More</button>


                        </div>
                    </div>
                    <div className="unique-slideshow-container">
            <button className="unique-prev" onClick={prevSlide}>❮</button>
            <div className="unique-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="unique-slide" key={index}>
                        <img src={image} alt={`Car ${index + 1}`} className='unique-img' />
                    </div>
                ))}
            </div>
            <button className="unique-next" onClick={nextSlide}>❯</button>
        </div>
        </div>
    );
}

export default Home;
