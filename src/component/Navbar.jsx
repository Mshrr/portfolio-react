import React, { useState } from "react";
import NavButton from "./NavButton"; // Pastikan path-nya sesuai dengan struktur proyek Anda

function Navbar() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <header className="fixed-top bg-blue ">
            <div className={`nav-button col ${isMobileNavOpen ? 'open' : ''}`} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} >
                <div className="list-1"></div>
                <div className="list-2"></div>
                <div className="list-3"></div>
            </div>
            <div className={`navbar col ${isMobileNavOpen ? 'open' : ''}`}>
                <div className="profile">
                    <img className="nav-image" src="../public/images/profile-img1.png" alt="" />
                    <h3 className="name-nav"><b>Maulana Manshur</b></h3>
                </div>
                <ul>
                    <li>
                        <a href="#section1">Home</a>
                        <a href="#section2">Journey</a>
                        <a href="#section3">Skills</a>
                        <a href="#section4">Certified</a>
                        <a href="#section5">Project</a>
                        <a href="#section6">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
