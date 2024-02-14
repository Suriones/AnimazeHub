import React, { useEffect } from "react";
import AnimeCard from "./AnimeCard/AnimeCard.jsx";
import Loading from "./../../ReusableComponents/StateStatus/Loading/Loading.jsx"
import Anime from "./Anime.jsx";
import unLikePNG from "./../../../../public/unLike.png";

const AnimeContainer = React.memo((props) => {

    useEffect(() => { props.data.dispatch({ type: "setValueSearchField", value: "" }) }, []);

    const mappingAnimeCard = () => {
        const sort = (option) => {
            switch (option.target.value) {
                case "By name":
                    props.data.dispatch({ type: "sort", sort: "name" });
                    break;
                case "By likes":
                    props.data.dispatch({ type: "sort", sort: "like" });
                    break;
                case "By year of release":
                    props.data.dispatch({ type: "sort", sort: "year" });
                    break;
                default:
                    break;
            }
        }

        const search = React.createRef();
        const setValueSearchField = () => props.data.dispatch({ type: "setValueSearchField", value: search.current.value });

        const like = (animeID, likeStatus, likeID) => likeStatus === unLikePNG ? props.data.dispatch(props.data.authDAL.likeAnime(props.data.authData.userID, animeID)) : props.data.dispatch(props.data.authDAL.unlikeAnime(props.data.authData.userID, likeID, animeID));

        const animeList = [];
        props.data.animeData.filteredAnime.map(a => animeList.push(<AnimeCard authStatus={props.data.authData.authStatus} likedAnime={props.data.authData.likedAnime} animeID={a.animeID} key={a.animeID} name={a.name} img={a.img} description={a.description} year={a.year} likeCount={a.like} like={like} />));

        return <Anime anime={props.data.animeData.anime} search={search} searchValue={props.data.animeData.valueSearchField} setSearchValue={setValueSearchField} sort={sort} animeList={animeList.reverse()} admin={props.data.authData.admin} />
    }

    return props.data.animeData.animeRequestStatus ? mappingAnimeCard() : <Loading />;
})

export default AnimeContainer;