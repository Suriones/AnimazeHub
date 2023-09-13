import React from "react";
import anime_style from "./Anime.scss"

const Anime = (props) => {
    return <div className={`row ${anime_style.animeList}`}>
        {props.addAnimeBlock}
        {props.animeComponents}
    </div>
}

export default Anime;