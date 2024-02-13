import React from "react";
import NewsCard from "./NewsCard/NewsCard.jsx"
import Loading from "../../ReusableComponents/StateStatus/Loading/Loading.jsx";
import Main from "./Main.jsx";
import { time } from "../../../ExternalFunctions/ExternalFunctions.js"
import ReviewCard from "./Review/ReviewCard.jsx";

// Microtask: Замінити key={Math.random()} на ID

const MainContainer = (props) => {

    const mappingContent = () => {

        const newsComponents = [];
        props.data.newsData.news.map(n => newsComponents.push(<NewsCard name={n.name} key={Math.random()} value={n.value} username={n.username} time={n.time} title={n.title} />));

        const reviewComponents = [];
        props.data.reviewData.review.map(r => reviewComponents.push(<ReviewCard content={r.content} smallImageURL={r.smallImageURL} bigImageURL={r.bigImageURL} time={r.time} title={r.title} username={r.username} key={r.key} id={r.key} />))

        return <Main anime={props.data.animeData.anime} admin={props.data.authData.admin} newsComponents={newsComponents.reverse()} reviewComponents={reviewComponents.reverse()} />
    }

    return props.data.newsData.newsRequestStatus && props.data.animeData.animeRequestStatus ? mappingContent() : <Loading />
}

export default MainContainer;