import React from "react";
import AnimeBlock from "./AnimeBlock/AnimeBlock";
import Loading from "../../Loading/Loading.jsx"

const Anime = (props) => {

    if (!props.anime.length) {
        return <Loading />
    } else {
        return (
            <div>
                {props.anime.map(a => {
                    return <AnimeBlock id={a.id} key={a.id} name={a.name} img={a.img} />
                })}
            </div>
        );
    }
}

export default Anime;