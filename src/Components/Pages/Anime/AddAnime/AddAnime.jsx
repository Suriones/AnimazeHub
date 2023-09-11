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
                TrailerYouTubeUrl.current.value = "https://www.youtube.com/";
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

    return (<div className={addAnime_style.addAnime}>
        <p><input ref={Title} placeholder="Title"></input></p>
        <p><input ref={IMGUrl} placeholder="IMG url"></input><img title="Скопіюйте посилання на картинку з гугла, бажаний масштаб 1:2" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52582/information-emoji-clipart-md.png"></img></p>
        <p><input ref={Description} placeholder="Description"></input></p>
        <p><input ref={TrailerYouTubeUrl} placeholder="Trailer YouTube url"></input><img title="Посилання має починатись з https://www.youtube... Перейдіть в (поділитись відео) на YouTube, далі (встроїти) і скопіюйте посилання звідтам. В ідеалі додайте після слова youtube (-nocookie), щоб уникнути можливих помилок." src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52582/information-emoji-clipart-md.png"></img></p>
        <p><button onClick={sendToDB}>Додати аніме</button></p>
    </div>)
})

export default AddAnime;