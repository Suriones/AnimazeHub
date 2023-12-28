import React, { useEffect } from "react";
import reviewAddingPage_s from "./ReviewAddingPage.module.scss";
import { time } from "./../../../../ExternalFunctions/ExternalFunctions.js";
import { useNavigate } from "react-router-dom";

const ReviewAddingPage = (props) => {

    const navigate = useNavigate();
    useEffect(() => { props.data.authData.admin ? null : navigate("/") }, []);

    const Title = React.createRef(),
        SmallImageURL = React.createRef(),
        FullImageURL = React.createRef(),
        Content = React.createRef();

    const postReview = () => props.data.dispatch(props.data.reviewDAL.postReview({
        title: Title.current.value,
        smallImageURL: SmallImageURL.current.value,
        fullImageURL: FullImageURL.current.value,
        content: Content.current.value,
        username: props.data.authData.login,
        time: time()
    })).then(navigate("/"));

    return <div>
        <div className={reviewAddingPage_s.form}>
            <div>
                <label>Title</label>
                <input ref={Title} />
            </div>
            <div>
                <label>Small image URL</label>
                <input ref={SmallImageURL} />
                <a className={reviewAddingPage_s.description}>Copy the link to the picture from Google. The desired scale is 1:1.</a>
            </div>
            <div>
                <label>Full image URL</label>
                <input ref={FullImageURL} />
                <a className={reviewAddingPage_s.description}>Copy the link to the picture from Google. The desired scale is 2:1.</a>
            </div>
            <div>
                <label>Content</label>
                <input ref={Content} />
            </div>

            <button onClick={postReview}>Submit</button>
        </div>
    </div>
}

export default ReviewAddingPage;