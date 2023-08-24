import React from "react";
import header_style from "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={header_style.header}>

            <div className={header_style.header_button}>
                <NavLink to="/" className={(navData) => navData.isActive ? header_style.active : header_style.no_active}>{props.main}</NavLink>
            </div>

            <div className={header_style.header_button}>
                <NavLink to="/anime" className={(navData) => navData.isActive ? header_style.active : header_style.no_active}>{props.anime}</NavLink>
            </div>

        </div>
    );
}

export default Header;