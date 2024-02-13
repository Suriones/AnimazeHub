import React from "react";
import reviewCard_s from "./ReviewCard.module.scss";
import ReviewFullPage from "./ReviewFullPage/ReviewFullPage.jsx"

const ReviewCard = (props) => {

    const [anchor, setAnchor] = React.useState(null);
    const openReviewFullPage = (event) => setAnchor(anchor ? null : event.target);

    return <div className={reviewCard_s.review} onClick={() => anchor ? openReviewFullPage() : null}>
        <div className={reviewCard_s.reviewContainer}>
            <div className={reviewCard_s.imageBlock}>
                <img src={props.smallImageURL} onClick={openReviewFullPage}></img>
            </div>
            <div className={reviewCard_s.valueBlock}>
                <div className={reviewCard_s.title}><h3 onClick={openReviewFullPage}>{props.title}</h3></div>
                <div className={reviewCard_s.content}>{props.content}</div>
                <div className={reviewCard_s.description}>
                    <div className={reviewCard_s.information}>
                        <span className={reviewCard_s.username}>{props.username}</span>
                        <span className={reviewCard_s.time}>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
        <ReviewFullPage open={Boolean(anchor)} value={props.content} image={props.bigImageURL} title={props.title} />
    </div>
}

export default ReviewCard;