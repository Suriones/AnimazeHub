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
        if (props.authData.authStatus === true) { navigate("/"); }
    })

    return <div className={login_style.login}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
            <input className="form-control" ref={login} placeholder="username" />
            <div className="form-text">You can use the user or admin username without a password.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" ref={password} id="exampleInputPassword1" />
            <div className="form-text">The password may be empty.</div>
        </div>
        <button type="submit" onClick={loginUser} className="btn btn-primary">Submit</button>
    </div>
})

export default Login;