import React from "react";

export default function Navbar() {
    return (
        <header>
            <div class="navbar">
                <div class="navbarLogo">
                    <a href="#about"> FERSWORLD </a>
                </div>
                <nav>
                    <a href="#projects"> Past Work </a>
                    <a href="#skills"> Skills </a>
                </nav>
                <a href="#contact"> Contact Me </a>
            </div>
        </header>
    );
}