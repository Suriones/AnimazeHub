import React from "react";
import { NavLink } from "react-router-dom";
import animeBlock_style from "./AnimeBlock.scss";

const AnimeBlock = (props) => {
    return <div className={`card ${animeBlock_style.block}`} style={{ width: 18 + "rem" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className={`card-text ${animeBlock_style.description}`}>{props.description}</p>
            <NavLink to={`/anime/${props.id}`} className="btn btn-primary">Watch</NavLink>
        </div>
    </div>
}

export default AnimeBlock;