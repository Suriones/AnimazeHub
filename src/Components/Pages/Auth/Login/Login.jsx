import React, { useEffect } from "react";
import login_style from "./Login.scss"
import { useNavigate } from "react-router-dom";

const Login = React.memo((props) => {

    const login = React.createRef();
    const password = React.createRef();

    const loginUser = () => {

        const user = {
            login: login.current.value,
            password: password.current.value
        }

        props.dispatch(props.authDAL.loginUser(user));
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (props.authData.authStatus === true) {
            navigate("/");
        }
    })

    return <div className={login_style.login}>
        <form>
            <p><input id="loginUsername" ref={login} placeholder="Username"></input></p>
            <p><input id="loginPassword" ref={password} placeholder="Password" type="password"></input></p>
            <p><button id="loginButton" onClick={loginUser}>Увійти</button></p>
        </form>
    </div>

})

export default Login;