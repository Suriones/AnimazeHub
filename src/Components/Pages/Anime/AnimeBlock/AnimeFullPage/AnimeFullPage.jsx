import React from "react";
import animeFullPage_style from "./AnimeFullPage.scss";
import Loading from "../../../../Loading/Loading.jsx"

const AnimeFullPage = (props) => {

    if (!props.data) {
        return <Loading />
    } else {
        return (
            <div className={animeFullPage_style.anime}>

                <div className={animeFullPage_style.preview}>

                    <div className={animeFullPage_style.picture}>
                        <img src={props.data.img}></img>
                    </div>

                    <div className={animeFullPage_style.information}>

                        <div className={animeFullPage_style.name}>
                            <h1>{props.data.name}</h1>
                        </div>

                        <div className={animeFullPage_style.description}>
                            {props.data.description}
                        </div>

                        <div className={animeFullPage_style.video}>
                            {<iframe width="640" height="360" src={props.data.trailer} allowFullScreen></iframe>}
                        </div>

                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default AnimeFullPage;