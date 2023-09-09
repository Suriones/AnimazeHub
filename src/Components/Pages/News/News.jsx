import React from "react";
import news_style from "./News.scss";

const News = (props) => {
    return <div className={news_style.news}>
        {props.newsComponents}
        {props.addNews}
    </div>
}

export default News;