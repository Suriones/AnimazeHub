import React from "react";
import NewsCard from "./NewsCard/NewsCard.jsx"
import Loading from "../../ReusableComponents/StateStatus/Loading/Loading.jsx";
import Main from "./Main.jsx";
import { time } from "../../../ExternalFunctions/ExternalFunctions.js"
import Review from "./Review/Review.jsx";

// Microtask: Замінити key={Math.random()} на ID

const MainContainer = (props) => {
    const newsAddingField = React.createRef(),
        titleAddingField = React.createRef();

    const mappingContent = () => {
        const postNews = () => props.data.dispatch(props.data.newsDAL.postNews(newsAddingField.current.value, props.data.authData.login, time(), titleAddingField.current.value));
        const setValueOfTheNewsAddingField = () => props.data.dispatch({ type: "setValueOfTheNewsAddingField", value: newsAddingField.current.value });
        const setTitleOfTheNewsAddingField = () => props.data.dispatch({ type: "setTitleOfTheNewsAddingField", value: titleAddingField.current.value });

        const newsComponents = [];

        props.data.newsData.news.map(n => newsComponents.push(<NewsCard name={n.name} key={Math.random()} value={n.value} username={n.username} time={n.time} title={n.title} />));
        props.data.authData.admin ? newsComponents.push(<NewsCard titleOfTheNewsAddingField={props.data.newsData.titleOfTheNewsAddingField} setTitleOfTheNewsAddingField={setTitleOfTheNewsAddingField} titleAddingField={titleAddingField} admin={props.data.authData.admin} key="AddNews" valueOfTheNewsAddingField={props.data.newsData.valueOfTheNewsAddingField} setValueOfTheNewsAddingField={setValueOfTheNewsAddingField} postNews={postNews} newsAddingField={newsAddingField} username={props.data.authData.login} />) : null;

        const reviewComponents = [];

        props.data.reviewData.review.map(r => reviewComponents.push(<Review content={r.content} smallImageURL={r.smallImageURL} time={r.time} title={r.title} username={r.username} key={r.key} id={r.key}/>))

        return <Main anime={props.data.animeData.anime} admin={props.data.authData.admin} newsComponents={newsComponents.reverse()} reviewComponents={reviewComponents.reverse()} />
    }

    return props.data.newsData.newsRequestStatus && props.data.animeData.animeRequestStatus ? mappingContent() : <Loading />
}

export default MainContainer;