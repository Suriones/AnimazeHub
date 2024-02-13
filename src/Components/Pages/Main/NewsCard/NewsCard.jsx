import React from "react";
import newsCard_s from "./NewsCard.module.scss"

const NewsCard = (props) => {
    const defaultPost = <section className={newsCard_s.card}>
        <div className={newsCard_s.cardBody}>
            <h5>{props.title}</h5>
            <div className={newsCard_s.content}>{props.value}</div>
        </div>
        <div className={newsCard_s.detalis}>
            <small>Author: <a>{props.username}</a></small>
            <div className={newsCard_s.data}><small>{props.time}</small></div>
        </div>
    </section>;

    return defaultPost;
}

export default NewsCard;