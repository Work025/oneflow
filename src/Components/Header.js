import React, { useState } from "react";
import logo from "../Assets/Logo.svg";
import "../Styles/Header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="header logo" />
            </div>

            <nav className={`header-nav ${isOpen ? "open" : ""}`}>
                <ul className="header-ul">
                    <li><a href="#">Why Oneflow?</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <button>Get a demo</button>
                    <button>Log in</button>
                    <i className="fas fa-earth" aria-hidden="true"></i>
                </ul>
            </nav>

            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;