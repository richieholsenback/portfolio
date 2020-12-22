import React from "react";
import { Link } from "react-router-dom";


export const NavBar = props => {
    return (
        <>
        
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/work">
                    <h2 className="navtext">Richie Holsenback</h2>
                </Link>
                </li>
                <div className="navSpacer"></div>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/work">
                        <h4 className="navtextItem">Work</h4>
                 </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/resume">
                       <h4 className="navtextItem">Resumé</h4>
                </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/contact">
                    <h4 className="navtextItem">Contact</h4>
                </Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/fun">
                    <h4 className="navtextItem">Fun</h4>
                </Link>
                </li>
                <div className="navSpacer"></div>
            </ul>

            {/* <img id="headerBG" src={photo} width="100%" alt="header art"/> */}
        </>
    );
};
