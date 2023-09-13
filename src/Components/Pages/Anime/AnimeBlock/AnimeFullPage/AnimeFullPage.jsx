import React from "react";
import animeFullPage_style from "./AnimeFullPage.scss";

const AnimeFullPage = React.memo((props) => {

    return (
        <div className={animeFullPage_style.anime}>

            <div className={animeFullPage_style.preview}>

                <div className={animeFullPage_style.picture}>
                    <img src={props.data.img}></img>
                </div>

                <div className={animeFullPage_style.information}>

                    <div className={animeFullPage_style.name}>
                        <p className="h2">{props.data.name}</p>
                    </div>

                    <div className={animeFullPage_style.description}>
                        <p className="text-md-left">{props.data.description}</p>

                    </div>

                    <div className={animeFullPage_style.video}>
                        {<iframe width="640" height="360" src={props.data.trailer} allowFullScreen></iframe>}
                    </div>

                </div>
            </div>
            <hr />
            <div className={animeFullPage_style.playerZone}>
                <div className={animeFullPage_style.videoplayer}>
                    <h3>Video player</h3>
                    <p>I'm not a pirate and i don't have to plan to work on the player for now :)</p>
                    <p>But all other functionality is completely at your disposal!</p>
                </div>
            </div>
            <hr />
        </div>
    );
})

export default AnimeFullPage;