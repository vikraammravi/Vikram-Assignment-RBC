import React from "react";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import './nav.scss'

function Nav() {
    return (
        <div className="navbar">
            <div className="logo"><ImBooks/></div>
            <ul className="nav-links">
                <Link to="/" >Books</Link>
                <Link to="/cart">Cart</Link>
            </ul>
        </div>
    );
}

export default Nav;
