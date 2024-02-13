import React from "react";
import reviewFullPage_s from "./ReviewFullPage.module.scss";

const ReviewFullPage = (props) => {
    const image = props.image ? <img src={props.image}></img> : null;
    const result = props.open ? <div className={reviewFullPage_s.wrapper}><div className={reviewFullPage_s.background}></div><div className={reviewFullPage_s.ReviewFullPage}>
        {image}
        <h3>{props.title}</h3>
        <p>{props.value}</p>
    </div></div> : null;

    return result;
}

export default ReviewFullPage;