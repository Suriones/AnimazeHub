import React from "react";
import animeBlock_style from "./AnimeBlock.scss"

const AnimeBlock = (props) => {
    return (
        <div className={animeBlock_style.block}>
            <p>{props.name}</p>
        </div>
    )
}

export default AnimeBlock;