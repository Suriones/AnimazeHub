import React from "react";
import { NavLink } from "react-router-dom";
import header_style from "./Header.scss";

const Header = React.memo((props) => {
    return <div className={header_style.header}>
        <div className={header_style.header_button}>
            <NavLink to="/" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Головна</NavLink>
        </div>
        <div className={header_style.header_button}>
            <NavLink to="/anime" className={(navData) => navData.isActive ? header_style.active : header_style.no_active} end>Список аніме</NavLink>
        </div>
        <div className={header_style.vertical_line}></div>
        {props.authBlockHeader}
    </div>

})

export default Header;