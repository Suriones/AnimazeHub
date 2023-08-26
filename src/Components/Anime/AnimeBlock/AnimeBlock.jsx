import React from "react";
import animeBlock_style from "./AnimeBlock.scss";
import { NavLink } from "react-router-dom";

const AnimeBlock = (props) => {
    
    return (
        <div className={animeBlock_style.block}>
            <p>{props.name}</p>
            <NavLink to={'/anime/' + props.id}>Перейти!</NavLink>
        </div>
    )
}

export default AnimeBlock;