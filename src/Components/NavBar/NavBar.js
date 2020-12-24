import React from "react";
import { Link } from "react-router-dom";
import "../scss/NavBar.scss"

export const NavBar = props => {
    return (
        <>
        
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">
                    <h2 className="navtext navHeader">Richie Holsenback</h2>
                </Link>
                </li>
                <div className="nav-choices">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">
                        <h4 className="navtext">Work</h4>
                 </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/resume">
                       <h4 className="navtext">Resumé</h4>
                </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/contact">
                    <h4 className="navtext">Contact</h4>
                </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/fun">
                    <h4 className="navtext">Fun</h4>
                </Link>
                </li>
                </div>
            </ul>

            {/* <img id="headerBG" src={photo} width="100%" alt="header art"/> */}
        </>
    );
};
