import React from "react";
import "./Navbar.css";

const Navbar = props =>

    <nav className="navbar navbar-dark bg-gunmetal">
        <div className="container">
        <ul className="navbar-nav d-inline">

        <li className="nav-item title d-inline-block d-inline col-md-4">
            <a className="navbar-brand nav-item d-inline-block title" href="/">
                Clicky
            </a>
        </li>

        <li className="nav-item title d-inline-block d-inline col-md-4">
            Eh, what's up, Doc
        </li>

        <li className="nav-item title  d-inline-block d-inline col-md-3">
            Score: {props.score} | Top Score: {props.topscore}
        </li>

        </ul>
        </div>

    </nav>;

export default Navbar;