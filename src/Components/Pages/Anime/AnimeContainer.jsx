import React from "react";
import AnimeBlock from "./AnimeBlock/AnimeBlock";
import Loading from "../Loading/Loading.jsx"
import Anime from "./Anime.jsx";
import { NavLink } from "react-router-dom";
import anime_style from "./Anime.scss";

const AnimeContainer = (props) => {

    let animeComponents = [];
    let addAnimeBlock;

    if (props.authData.authStatus === true && props.authData.admin === true) {
        addAnimeBlock = <NavLink to={"/addAnime"}>
            <div className={anime_style.block}>
                <img src="https://e0.pxfuel.com/wallpapers/380/263/desktop-wallpaper-one-piece-wanted-poster-print-by-wallart-displate-in-2020-one-piece-anime-one-piece-drawing-one-piece-bounties.jpg" />
                <p>Додати аніме</p>
            </div>
        </NavLink>
    }

    props.anime.map(a => {
        animeComponents.push(<AnimeBlock id={a.id} key={a.id} name={a.name} img={a.img} />);
    })

    if (!props.anime.length) {
        return <Loading />
    } else {
        return <Anime animeComponents={animeComponents} addAnimeBlock={addAnimeBlock} />;
    }
}

export default AnimeContainer;