import React from "react";
import { NavLink } from "react-router-dom";
import header_style from "./Header.scss";

const Header = React.memo((props) => {
    return (<div className={header_style.header}>
        <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="30" height="24" className="d-inline-block align-text-top" />ReactApp</a>
                    </div>
                </nav>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end>News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/anime" end>Anime List</NavLink>
                        </li>
                    </ul>
                    {props.authBlockHeader}
                </div>
            </div>
        </nav>
    </div>
    );
})

export default Header;