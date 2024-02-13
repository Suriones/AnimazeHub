import React, { useEffect } from "react";
import newsAddingPage_s from "./NewsAddingPage.module.scss";
import { useNavigate } from "react-router-dom";
import { time } from "./../../../../ExternalFunctions/ExternalFunctions.js"

const NewsAddingPage = (props) => {

    const navigate = useNavigate();
    useEffect(() => { props.data.authData.admin ? null : navigate("/") }, []);

    const Title = React.createRef(),
        Value = React.createRef();

    const postNews = () => props.data.dispatch(props.data.newsDAL.postNews({
        title: Title.current.value,
        value: Value.current.value,
        username: props.data.authData.login,
        time: time()
    })).then(navigate("/"));

    return <div>
        <div className={newsAddingPage_s.form}>
            <div>
                <label>Title</label>
                <input ref={Title} />
            </div>
            <div>
                <label>Value</label>
                <input ref={Value} />
                <a className={newsAddingPage_s.description}>200 symbol limit</a>
            </div>

            <button onClick={postNews}>Submit</button>
        </div>
    </div>
}

export default NewsAddingPage;