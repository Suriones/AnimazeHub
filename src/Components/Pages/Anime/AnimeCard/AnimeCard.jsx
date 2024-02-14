import React from "react";
import { NavLink } from "react-router-dom";
import animeCard_s from "./AnimeCard.module.scss";
import Like from "./../../../ReusableComponents/Like/Like.jsx";
import { toast } from "react-toastify";
import likePNG from "./../../../../../public/like.png";
import unLikePNG from "./../../../../../public/unLike.png";

const AnimeCard = (props) => {

    const like = () => {
        const plusLike = () => props.like(props.animeID, likeStatus());
        const minusLike = () => props.likedAnime.map(item => item[Object.keys(item)[0]] === props.animeID ? props.like(props.animeID, likeStatus(), Object.keys(item)[0]) : null);

        props.authStatus ? likeStatus() === unLikePNG ? plusLike() : minusLike() : toast.info("Need to login/register!");
    };

    const likeStatus = () => {
        for (let i = 0; i < props.likedAnime.length; i++) {
            if (props.likedAnime[i][Object.keys(props.likedAnime[i])[0]] === props.animeID)
                return likePNG;
        }

        return unLikePNG;
    };

    return <div className={animeCard_s.card}>
        <NavLink to={`/anime/${props.animeID}`}><img className={animeCard_s.prewie} src={props.img} /></NavLink>
        <div className={animeCard_s.cardBody}>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
        </div>
        <div className={animeCard_s.detalis}>
            <Like likeStatus={likeStatus()} like={like} count={props.likeCount} authStatus={props.authStatus} />
            <div className={animeCard_s.data}><small>year {props.year}</small></div>
        </div>
    </div>
}

export default AnimeCard;