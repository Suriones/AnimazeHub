import React from "react";
import AnimeBlock from "./AnimeBlock/AnimeBlock";
import Loading from "../Loading/Loading.jsx"
import Anime from "./Anime.jsx";
import { NavLink } from "react-router-dom";
import animeBlock_style from "./AnimeBlock/AnimeBlock.scss";

const AnimeContainer = (props) => {

    let animeComponents = [];
    let addAnimeBlock;

    if (props.authData.authStatus === true && props.authData.admin === true) {
        addAnimeBlock = <div className={`card ${animeBlock_style.block}`} style={{ width: 18 + "rem" }}>
            <img className="card-img-top" src="https://beebom.com/wp-content/uploads/2023/03/best-anime-with-overpowered-main-character-OP-MC.jpg?w=750&quality=75" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Add new Anime</h5>
                <p className={`card-text ${animeBlock_style.description}`}>{props.description}</p>
                <NavLink to={`/addAnime`} className="btn btn-primary">Go!</NavLink>
            </div>
        </div>
    }

    props.anime.map(a => {
        animeComponents.push(<AnimeBlock id={a.id} key={a.id} name={a.name} img={a.img} description={a.description} />);
    })

    if (!props.anime.length) {
        return <Loading />
    } else {
        return <Anime animeComponents={animeComponents} addAnimeBlock={addAnimeBlock} />;
    }
}

export default AnimeContainer;