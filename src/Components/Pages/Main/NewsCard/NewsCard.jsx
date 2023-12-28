import React from "react";
import newsCard_s from "./NewsCard.module.scss"

const NewsCard = (props) => {

    const addingNews = <section className={newsCard_s.card}>
        <div className={newsCard_s.cardBody}>
            <h5>Add News</h5>
            <div className={newsCard_s.content}>
                <textarea maxLength="30" placeholder="30 symbol limit, title" className={newsCard_s.title} ref={props.titleAddingField} value={props.titleOfTheNewsAddingField} onChange={props.setTitleOfTheNewsAddingField}></textarea>
                <textarea maxLength="200" placeholder="200 symbol limit, small news" className={newsCard_s.value} ref={props.newsAddingField} value={props.valueOfTheNewsAddingField} onChange={props.setValueOfTheNewsAddingField}></textarea>
                <button onClick={props.postNews}>Send</button>
            </div>
        </div>
        <div className={newsCard_s.detalis}>
            <small>Username: <a>{props.username}</a></small>
        </div>
    </section>;

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

    return props.admin ? addingNews : defaultPost;
}

export default NewsCard;