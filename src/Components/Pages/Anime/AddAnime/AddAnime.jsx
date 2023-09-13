import React, { useEffect } from "react";
import addAnime_style from "./AddAnime.scss"
import { useNavigate } from "react-router-dom";

const AddAnime = React.memo((props) => {

    const Title = React.createRef();
    const IMGUrl = React.createRef();
    const Description = React.createRef();
    const TrailerYouTubeUrl = React.createRef();

    const navigate = useNavigate();

    useEffect(() => {
        if (props.authData.authStatus === false || props.authData.admin === false) { navigate("/"); }
    }, []);

    const sendToDB = () => {
        if (Title.current.value !== "" &&
            IMGUrl.current.value !== "" &&
            Description.current.value !== "" &&
            TrailerYouTubeUrl.current.value !== "") {

            if (!IMGUrl.current.value.includes("https://")) {
                IMGUrl.current.value = "https://wallpapercave.com/wp/wp5194133.jpg";
            }

            if (!TrailerYouTubeUrl.current.value.includes("https://www.youtube")) {
                TrailerYouTubeUrl.current.value = "https://www.youtube-nocookie.com/embed/N_yu136hKMQ?si=MuL4-6EVIqKHc5mm";
            }

            const anime = {
                name: Title.current.value,
                img: IMGUrl.current.value,
                description: Description.current.value,
                trailer: TrailerYouTubeUrl.current.value
            }

            props.dispatch(props.animeDAL.addAnime(anime));

            navigate("/anime");

        } else { alert("Деякі поля пусті!") }

    }

    return <div className={addAnime_style.form}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input ref={Title} className="form-control" />
            <div className="form-text">Anime name.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Image URL</label>
            <input ref={IMGUrl} className="form-control" />
            <div className="form-text">Copy the link to the picture from Google. The desired scale is 2:1.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
            <input ref={Description} className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">YouTube Trailer URL</label>
            <input ref={TrailerYouTubeUrl} className="form-control" />
            <div className="form-text">The link must start with https://www.youtube <p>Go to (share video) on YouTube, then (embed) and copy the link from there.</p> Ideally add after (youtube-nocookie) to avoid possible errors. </div>
        </div>
        <button onClick={sendToDB} type="submit" className="btn btn-primary">Submit</button>
    </div>
})

export default AddAnime;