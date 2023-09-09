import React from "react";
import AnimeBlock from "./AnimeBlock/AnimeBlock";
import Loading from "../../Loading/Loading.jsx"
import Anime from "./Anime.jsx";

const AnimeContainer = (props) => {

    let animeComponents = [];

    props.anime.map(a => {
        animeComponents.push(<AnimeBlock id={a.id} key={a.id} name={a.name} img={a.img} />);
    })

    if (!props.anime.length) {
        return <Loading />
    } else {
        return <Anime animeComponents={animeComponents} />;
    }
}

export default AnimeContainer;