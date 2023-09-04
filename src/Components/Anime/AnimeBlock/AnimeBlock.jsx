import React from "react";
import animeBlock_style from "./AnimeBlock.scss";
import { NavLink } from "react-router-dom";

const AnimeBlock = (props) => {

    return (
        <NavLink to={`/anime/${props.id}`}>
            <div className={animeBlock_style.block}>
                <img src={props.img}></img>
                <p>{props.name}</p>
            </div>
        </NavLink>
    )
}

export default AnimeBlock;