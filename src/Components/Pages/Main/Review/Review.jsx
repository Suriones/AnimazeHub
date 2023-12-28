import React from "react";
import review_s from "./Review.module.scss"
import { NavLink } from "react-router-dom";

const Review = (props) => {
    return <div className={review_s.review}>
        <div className={review_s.reviewContainer}>
            <div className={review_s.imageBlock}>
                <NavLink to={`/review/${props.id}`}><img src={props.smallImageURL}></img></NavLink>
            </div>
            <div className={review_s.valueBlock}>
                <div className={review_s.title}><h3>{props.title}</h3></div>
                <div className={review_s.content}>{props.content}</div>
                <div className={review_s.description}>
                    <div className={review_s.information}>
                        <span className={review_s.username}>{props.username}</span>
                        <span className={review_s.time}>{props.time}</span>
                    </div>
                    <div className={review_s.readFull}>
                        <NavLink to={`/review/${props.id}`}>Read full</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Review;