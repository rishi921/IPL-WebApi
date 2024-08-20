import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    IPL Stats
                </Link>
                <div className="navbar-links">
                    <Link to="/matches" className="navbar-link">
                        View Match Details
                    </Link>
                    <Link to="/add-player" className="navbar-link">
                        Add New Player
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
