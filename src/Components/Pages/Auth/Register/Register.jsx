import React from "react";
import register_style from "./Register.scss"
import { useNavigate } from "react-router-dom";

const Register = React.memo((props) => {
    
    const login = React.createRef();
    const password = React.createRef();
    const admin = React.createRef();

    const navigate = useNavigate();

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
                navigate('/');
            }
        });
    }

    if (props.authData.authStatus === true) {
        navigate('/');
    } else {
        return (<div className={register_style.register}>
            <p><input ref={login} placeholder="Username"></input></p>
            <p><input ref={password} placeholder="Password"></input></p>
            <p><input ref={admin} type="checkbox" />Роль адміністратора</p>
            <p><button onClick={createUser}>Реєстрація</button></p>
        </div>)
    }
})

export default Register;