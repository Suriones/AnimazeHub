import React from "react";
import news_style from "./News.scss";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"

const News = (props) => {

    let NewsComponents = props.newsData.map(n => <NewsBlock id={n.id} name={n.name} />);

    return (
        <div className={news_style.news}>
            {NewsComponents};
        </div>
    );
}

export default News;