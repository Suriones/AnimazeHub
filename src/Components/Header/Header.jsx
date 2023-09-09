import React from "react";
import { NavLink } from "react-router-dom";
import header_style from "./Header.scss";

const Header = React.memo((props) => {

    const default_header = <div className={header_style.header}>
        <div className={header_style.header_button}>
            <NavLink to="/" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Головна</NavLink>
        </div>
        <div className={header_style.header_button}>
            <NavLink to="/anime" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Список аніме</NavLink>
        </div>
        <div className={header_style.vertical_line}></div>
    </div>

    if (props.authData.authStatus === true) {
        return <div className={header_style.header}>
            {default_header}
            <div className={header_style.username}>
                Username: {props.authData.login}
            </div>
        </div>
    } else return (
        <div className={header_style.header}>
            {default_header}
            <div className={header_style.header_button}>
                <NavLink to="/login" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Увійти</NavLink>
            </div>
            <div className={header_style.header_button}>
                <NavLink to="/register" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Реєстрація</NavLink>
            </div>

        </div>
    );
})

export default Header;