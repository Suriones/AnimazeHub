import React, { useEffect } from "react";
import login_s from "./Login.module.scss"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {

    const navigate = useNavigate();
    useEffect(() => { props.data.authData.authStatus ? navigate("/") : null });

    const login = React.createRef(),
        password = React.createRef();

    const authentication = () => {
        props.data.dispatch(props.data.authDAL.loginUser({
            login: login.current.value,
            password: password.current.value
        })).then(response => {
            response ? toast.success("Success!") : wrongData(login, password);
        });
    }

    const wrongData = (login, password) => {
        login.current.style = `background-color: rgb(255, 209, 209); border: 1px solid rgb(255, 209, 209);`;
        login.current.className = login_s.animationError;
        password.current.style = `background-color: rgb(255, 209, 209); border: 1px solid rgb(255, 209, 209);`;
        password.current.className = login_s.animationError;

        const removeClass = () => {
            if (window.location.href === "http://localhost:8080/login") {
                login.current.className = null;
                password.current.className = null;
            }
        }

        setTimeout(removeClass, 500);
        toast.error("Incorrect data!");
    }

    return <div className={login_s.loginForm}>
        <div className={login_s.loginInput}>
            <label>Login</label><br />
            <input maxLength="15" ref={login} placeholder="username" />
            <a>You can use the <b>'user'</b> or <b>'admin'</b> username without a password.</a>
        </div>
        <div className={login_s.passwordInput}>
            <label>Password</label>
            <input type="password" ref={password} />
            <a>The password may be empty.</a>
        </div>
        <button onClick={authentication}>Submit</button>
    </div>
}

export default Login;