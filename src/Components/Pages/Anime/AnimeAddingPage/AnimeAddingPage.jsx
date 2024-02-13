import React, { useEffect } from "react";
import AnimeAddingPage_s from "./AnimeAddingPage.module.scss"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AnimeAddingPage = (props) => {

    const navigate = useNavigate();
    useEffect(() => { props.data.authData.admin ? null : navigate("/"); }, []);

    const Title = React.createRef(),
        IMGUrl = React.createRef(),
        Description = React.createRef(),
        TrailerYouTubeUrl = React.createRef(),
        Year = React.createRef(),
        Country = React.createRef(),
        Genre = React.createRef(),
        VideoPlayer = React.createRef();

    const sendNewAnimeToDB = () => {
        if (Title.current.value && IMGUrl.current.value && Description.current.value && TrailerYouTubeUrl.current.value && Year.current.value && Country.current.value && Genre.current.value) {
            props.data.dispatch(props.data.animeDAL.postAnime({
                name: Title.current.value,
                img: IMGUrl.current.value,
                description: Description.current.value,
                trailer: "https://www.youtube-nocookie.com/embed/" + (TrailerYouTubeUrl.current.value.slice(32)).substring(0, TrailerYouTubeUrl.current.value.slice(32).search("&")),
                year: Year.current.value,
                country: Country.current.value,
                genre: Genre.current.value,
                like: 0,
                videoPlayer: VideoPlayer.current.value
            })).then(() => navigate("/anime"))
        } else {
            toast.info("All fields must be filled in!")
        }
    };


    const testSendNewAnimeToDB = () => {
        Title.current.value = "Name (test)";
        IMGUrl.current.value = "https://wallpapercave.com/wp/wp5194133.jpg";
        Description.current.value = "Description (test)";
        TrailerYouTubeUrl.current.value = "https://www.youtube.com/watch?v=2U76x2fD_tE&ab_channel=OstapS";
        Year.current.value = "2023 (test)";
        Country.current.value = "Japan (test)";
        Genre.current.value = "Detective (test)";

        sendNewAnimeToDB();
    };

    return <div className={AnimeAddingPage_s.form}>
        <div>
            <label>Title</label>
            <input ref={Title} />
            <a className={AnimeAddingPage_s.description}>Anime name.</a>
        </div>
        <div>
            <label>Image URL</label>
            <input ref={IMGUrl} />
            <a className={AnimeAddingPage_s.description}>Copy the link to the picture from Google. The desired scale is 1:2.</a>
        </div>
        <div>
            <label>Year</label>
            <input ref={Year} />
        </div>
        <div>
            <label>Country</label>
            <input ref={Country} />
        </div>
        <div>
            <label>Genre</label>
            <input ref={Genre} />
        </div>
        <div>
            <label>Description</label>
            <input ref={Description} />
        </div>
        <div>
            <label>Link to Video-Player</label>
            <input id={AnimeAddingPage_s.disabled} value="Without player" disabled ref={VideoPlayer} />
        </div>
        <div>
            <label>YouTube Trailer URL</label>
            <input ref={TrailerYouTubeUrl} />
            <a className={AnimeAddingPage_s.description}>Any link to the trailer from YouTube will do.</a>
        </div>

        <button onClick={sendNewAnimeToDB}>Submit</button>
        <button className={AnimeAddingPage_s.testButton} onClick={testSendNewAnimeToDB}>Autocomplete and submit (develop)</button>
    </div>
}

export default AnimeAddingPage;