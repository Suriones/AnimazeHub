import React, { useEffect } from "react";
import register_style from "./Register.scss"
import { useNavigate } from "react-router-dom";

const Register = React.memo((props) => {

    const login = React.createRef();
    const password = React.createRef();
    const admin = React.createRef();

    const createUser = () => {

        const user = {
            login: login.current.value,
            password: password.current.value,
            admin: admin.current.checked
        }

        props.dispatch(props.authDAL.checkLogin(user.login)).then(response => {
            if (response === false) {
                alert("Username вже зайнятий!")
            } else {
                props.dispatch(props.authDAL.addUser(user));
            }
        });
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (props.authData.authStatus === true) { navigate("/"); }
    })

    return (<div className={register_style.register}>
        <p><input id="registerUsername" ref={login} placeholder="Username"></input></p>
        <p><input id="registerPassword" ref={password} placeholder="Password"></input></p>
        <p><input id="registerRole" ref={admin} type="checkbox" />Роль адміністратора</p>
        <p><button id="registerButton" onClick={createUser}>Реєстрація</button></p>
        <p className={register_style.information}>Зареєстрований user може писати коментарі.</p>
        <p className={register_style.information}>Admin може додавати новини і аніме.</p>
    </div>)
})

export default Register;