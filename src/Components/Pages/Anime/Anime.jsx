import React from "react";
import anime_s from "./Anime.module.scss"
import { NavLink } from "react-router-dom";
import AnimeTips from "../../ReusableComponents/AnimeTips/AnimeTips.jsx";

const Anime = (props) => {
    return <div className={anime_s.anime}>
        <div className={anime_s.tools}>
            <div className={anime_s.sort}>
                <select defaultValue="Sorting list" onChange={props.sort}>
                    <option disabled>Sorting list</option>
                    <option>By name</option>
                    <option>By likes</option>
                    <option>By year of release</option>
                </select>
            </div>
            <div className={anime_s.search}>
                <input value={props.searchValue} ref={props.search} onChange={props.setSearchValue} type="search" placeholder="Search..."></input>
            </div>
            {props.admin ? <div className={anime_s.addAnime}>
                <NavLink to={`/addAnime`}><button>Add Anime</button></NavLink>
            </div> : null}
        </div>

        <div className={anime_s.content}>
            <div className={anime_s.animeList}>
                {props.animeList}
            </div>
            <div className={anime_s.informationContainer}>
                <AnimeTips anime={props.anime} />
            </div>
        </div>
    </div>
}

export default Anime;