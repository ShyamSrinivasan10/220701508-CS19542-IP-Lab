import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../img/logo.png'
const Navbar = () =>{
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <a href="/" className="logo">
            </a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Service</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar