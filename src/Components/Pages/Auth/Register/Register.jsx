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

    return <div className={register_style.register}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
            <input className="form-control" ref={login} placeholder="username" />
            <div className="form-text">Need unique username.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" ref={password} id="exampleInputPassword1" />
            <div className="form-text">The password may be empty.</div>
        </div>
        <form className="was-validated">
            <div className="custom-control custom-checkbox mb-3">
                <input ref={admin} type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                <label className="custom-control-label" htmlFor="customControlValidation1"><span className={register_style.checkboxAdmin}>Admin role</span></label>
                <div className="invalid-feedback">Without confirmation, you will not be able to add news and new anime. Just write comments.</div>
            </div>
        </form>
        <button type="submit" onClick={createUser} className="btn btn-primary">Submit</button>
    </div>
})

export default Register;