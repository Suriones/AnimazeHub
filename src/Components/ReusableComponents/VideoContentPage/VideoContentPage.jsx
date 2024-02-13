import React from "react";
import videoContentPage_s from "./VideoContentPage.module.scss";

const VideoContentPage = (props) => {
    const videoPlayer = props.data.videoPlayer === "Without player" ? null : props.data.videoPlayer;
    const warning = props.data.videoPlayer === "Without player" ? "It is prohibited to add new players yourself" : "The site offers a test viewing of only the first episode in order not to distribute pirated content";

    return (
        <div className={videoContentPage_s.videoContentPage}>

            <div className={videoContentPage_s.preview}>

                <div className={videoContentPage_s.picture}>
                    <img src={props.data.img}></img>
                </div>

                <div className={videoContentPage_s.information}>

                    <div className={videoContentPage_s.name}>
                        <h2>{props.data.name}</h2>
                        <div className={videoContentPage_s.id}>{props.data.id}</div>
                    </div>

                    <div className={videoContentPage_s.description}>
                        <a><b>Year: </b>{props.data.year}</a>
                        <a><b>Country: </b>{props.data.country}</a>
                        <a><b>Genre: </b>{props.data.genre}</a>
                        <p>{props.data.description}</p>
                    </div>

                    <div className={videoContentPage_s.video}>
                        {<iframe frameBorder="0" width="640" height="360" src={props.data.trailer} allowFullScreen></iframe>}
                    </div>

                </div>
            </div>
            <div className={videoContentPage_s.warning}>{warning}</div>
            <div className={videoContentPage_s.playerZone}>
                <div className={videoContentPage_s.videoplayer}>
                    <iframe loading="lazy" frameBorder="0" allowFullScreen width="640" height="360" src={videoPlayer}></iframe>
                </div>
            </div>
            <div className={videoContentPage_s.empty}></div>
        </div>
    );
}

export default VideoContentPage;