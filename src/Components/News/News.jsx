import React from "react";
import news_style from "./News.scss";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"

const News = (props) => {

    const NewsComponents = props.newsData.map(n => <NewsBlock id={n.id} name={n.name} key={n.id} />);

    if (props.newsData.length === 0) {
        return (<div className={news_style.news}><span className={news_style.loading}>LOADING...</span></div>)
    } else {
        return (
            <div className={news_style.news}>
                {NewsComponents};
            </div>
        );
    }
}

export default News;