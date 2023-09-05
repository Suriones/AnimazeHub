import React from "react";
import news_style from "./News.scss";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"

const News = (props) => {

    const sendToBLL = () => {
        props.dispatch(props.newsBLL.postNews(props.news.length, "News"));
    }

    if (!props.news.length) {
        return (<div className={news_style.news}><span className={news_style.loading}>LOADING...</span></div>)
    } else {
        return (
            <div className={news_style.news}>
                {props.news.map(n => {
                    return <NewsBlock id={n.id} name={n.name} key={n.id} />
                })}
                <div className={news_style.block} onClick={sendToBLL}><p>Додати новину</p></div>
            </div>
        );
    }
}

export default News;