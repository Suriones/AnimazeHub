import React from "react";
import login_style from "./Login.scss"
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate();

    const login = React.createRef();
    const password = React.createRef();

    const loginUser = () => {

        const user = {
            login: login.current.value,
            password: password.current.value
        }

        props.dispatch(props.authDAL.loginUser(user));
    }

    if (props.authData.authStatus === true) {
        navigate("/");
    } else {
        return <div className={login_style.login}>
            <p><input ref={login} placeholder="Username"></input></p>
            <p><input ref={password} placeholder="Password" type="password"></input></p>
            <p><button onClick={loginUser}>Увійти</button></p>
        </div>
    }
}

export default Login;