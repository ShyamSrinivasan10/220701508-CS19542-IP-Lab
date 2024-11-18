import React from 'react';
import './About.css'; // Import the CSS for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to [Your Car Selling Site Name]! We are dedicated to providing you with the best car buying experience possible. Our goal is to help you find the perfect vehicle that fits your needs and budget.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to make car buying simple, enjoyable, and transparent. We strive to connect buyers with a wide selection of quality vehicles and to provide top-notch customer service throughout the entire buying process.
            </p>
            <h2>What We Offer</h2>
            <ul>
                <li>Extensive selection of new and used cars</li>
                <li>Financing options to fit every budget</li>
                <li>Expert advice and support from our knowledgeable staff</li>
                <li>Seamless online car buying experience</li>
            </ul>
            <h2>Meet Our Team</h2>
            <p>
                Our team consists of automotive enthusiasts and professionals who are committed to helping you find the right vehicle. We understand that buying a car is a big decision, and we are here to guide you every step of the way.
            </p>
        </div>
    );
};

export default About;
