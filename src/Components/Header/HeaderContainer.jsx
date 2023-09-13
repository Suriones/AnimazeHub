import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import header_style from "./Header.scss"
import Header from "./Header";

const HeaderContainer = React.memo((props) => {

    let authBlockHeader;

    const navigate = useNavigate();

    const exit = () => {
        props.dispatch({ type: "exitUser" });
        navigate("/");
    }

    if (props.authData.authStatus === true) {
        authBlockHeader =
            <nav className="navbar-light">
                <div className="container-fluid">
                    <div className="text-end">
                        Username: <span className={header_style.login}>{props.authData.login}</span>
                        <img onClick={exit} width="15" height="15" className={header_style.imgExit} src="https://cdn.icon-icons.com/icons2/933/PNG/512/exit-to-app-button_icon-icons.com_72765.png"></img>
                    </div>
                </div>
            </nav>
    } else {
        authBlockHeader =
            <div className="text-end">
                <NavLink className="btn btn-outline-primary me-2" to="/login">Login</NavLink>
                <NavLink className="btn btn-primary" to="/register">Sign-up</NavLink>
            </div>
    }

    return (<Header authBlockHeader={authBlockHeader} />);
})

export default HeaderContainer;