import React, { useEffect } from "react";
import register_s from "./Register.module.scss"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = (props) => {

    const navigate = useNavigate();
    useEffect(() => { props.data.authData.authStatus ? navigate("/") : null });

    const login = React.createRef(),
        password = React.createRef(),
        admin = React.createRef();

    const createUser = () => {
        props.data.dispatch(props.data.authDAL.checkingLoginUniqueness(login.current.value)).then(response => {
            response ? sendUserData() : wrongData(login);
        });
    }

    const sendUserData = () => {
        props.data.dispatch(props.data.authDAL.registerUser({
            login: login.current.value,
            password: password.current.value,
            admin: admin.current.checked,
            likedAnime: ""
        }));
        toast.success("Success!");
    }

    const wrongData = (login) => {
        login.current.style = `background-color: rgb(255, 209, 209); border: 1px solid rgb(255, 209, 209);`;
        login.current.className = register_s.animationError;

        const removeClass = () => {
            if (window.location.href === "http://localhost:8080/register") {
                login.current.className = null;
            }
        }

        setTimeout(removeClass, 300);
        toast.error("Username is already taken!");
    }

    return <div className={register_s.registerForm}>

        <div className={register_s.loginInput}>
            <label>Login</label><br />
            <input maxLength="15" ref={login} placeholder="username" />
            <a>Need unique username.</a>
        </div>

        <div className={register_s.passwordInput}>
            <label>Password</label><br />
            <input type="password" ref={password} />
            <a>Password may be empty.</a>
        </div>

        <div className={register_s.checkbox}>
            <input ref={admin} type="checkbox" id="unchecked" className={register_s.checkboxInput} />
            <label htmlFor="unchecked" className={register_s.checkboxLabel}></label>
            <a>Admin role</a>
        </div>

        <div className={register_s.warning}>Without confirmation, you will not be able to add news and new anime. Only write a comments.</div>

        <button onClick={createUser}>Submit</button>
    </div>
}

export default Register;