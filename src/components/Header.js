import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <React.Fragment>
            <h2>BioLog</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Header;