import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import header_s from "./Header.module.scss"
import Header from "./Header.jsx";

const HeaderContainer = React.memo((props) => {

    const navigate = useNavigate();

    const authorizationOn =
        <nav className={header_s.authorizationOn}>
            <div className={header_s.login}>
                <div className={header_s.username}>
                    Login: {props.authData.login}
                </div>
                <div className={header_s.exitButton}>
                    <img onClick={() => { props.dispatch({ type: "exitUser" }); navigate("/") }} src="user_exit.png"></img>
                </div>
            </div>
        </nav>

    const authorizationOff =
        <nav className={header_s.authorizationOff}>
            <NavLink className={header_s.authButton} style={({ isActive }) => ({
                animation: isActive ? "none" : null,
                color: isActive ? "#FFB6C1" : null,
                textDecoration: isActive ? "solid underline #FFB6C1 2px" : null
            })} to="/login">Login</NavLink>
            <NavLink className={header_s.authButton} style={({ isActive }) => ({
                color: isActive ? "#FFB6C1" : null,
                textDecoration: isActive ? "solid underline #FFB6C1 2px" : null
            })} to="/register">Sign-up</NavLink>
        </nav>;

    return <Header authorization={props.authData.authStatus ? authorizationOn : authorizationOff} />
})

export default HeaderContainer;