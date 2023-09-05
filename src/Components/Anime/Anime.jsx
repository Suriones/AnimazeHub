import React from "react";
import anime_style from "./Anime.scss";
import AnimeBlock from "./AnimeBlock/AnimeBlock";

const Anime = (props) => {
    
    if (props.anime.length === 0) {
        return (<div className={anime_style.anime}><span className={anime_style.loading}>LOADING...</span></div>)
    } else {
        return (
            <div className={anime_style.anime}>
                {props.anime.map(a => {
                    return <AnimeBlock id={a.id} name={a.name} comments={a.comments} key={a.id} img={a.img} />
                })}
            </div>
        );
    }
}

export default Anime;