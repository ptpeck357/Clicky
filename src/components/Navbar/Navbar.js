import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <div className="main">
        <nav className="navbar navbar-dark bg-gunmetal">
            <div className="container">

                <div className="nav-item title d-inline-block col-md-4">
                    Clicky
                </div>

                <div className="nav-brand title d-inline-block  col-md-4">
                    {props.quote}
                </div>

                <div className="nav-brand title d-inline-block col-md-4">
                    Score: {props.score} | Top Score: {props.topscore}
                </div>

            </div>

        </nav>

        <div className="jumbotron">
            <h1 className="text-center">Click on your favorite Looney Tunes character to begin!</h1>
            <h1 className="text-center">Click on an image to earn points, but don't click anymore than once!</h1>
        </div>

    </div>
)

export default Navbar;