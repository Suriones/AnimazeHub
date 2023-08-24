import React from "react";
import anime_style from "./Anime.scss";
import AnimeBlock from "./AnimeBlock/AnimeBlock";

const Anime = (props) => {

    let animeComponents = props.animeData.map(a => <AnimeBlock id={a.id} name={a.name} />);

    return (
        <div className={anime_style.anime}>
            {animeComponents};
        </div>
    );
}

export default Anime;