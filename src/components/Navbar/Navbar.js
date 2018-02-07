import React from "react";
import "./Navbar.css";

const Navbar = props =>

    <nav className="navbar navbar-dark bg-gunmetal">
        <div className="container">
        <ul class="navbar-nav d-inline">

        <a className="navbar-brand nav-item d-inline-block title col-md-4" href="/">
            Clicky
        </a>

        <li class="nav-item title d-inline-block d-inline col-md-4">
            Click an image to begin!
        </li>

        <li class="nav-item title  d-inline-block d-inline col-md-3 ">
            Score: {props.score} | Top Score: {props.topscore}
        </li>

        </ul>
        </div>

    </nav>;

export default Navbar;