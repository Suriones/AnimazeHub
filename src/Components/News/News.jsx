import React from "react";
import news_style from "./News.scss";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"
import { newsAPI } from '../../Redux/API/api';

const News = (props) => {

    const NewsComponents = props.newsData.map(n => <NewsBlock id={n.id} name={n.name} key={n.id} />);

    const send = () => {
        newsAPI.postNews(props.newsData.length, "News").then(function () {
            props.dispatch({ type: "changedDBNews" });
        });
    }

    if (!props.newsData.length) {
        return (<div className={news_style.news}><span className={news_style.loading}>LOADING...</span></div>)
    } else {
        return (
            <div className={news_style.news}>
                {NewsComponents}
                <div className={news_style.block} onClick={send}><p>Додати новину</p></div>
            </div>
        );
    }
}

export default News;