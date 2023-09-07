import React from "react";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"
import news_style from "./News.scss";
import Loading from "../../Loading/Loading.jsx";

const News = (props) => {

    const sendToDAL = () => {
        props.dispatch(props.newsDAL.postNews(props.news.length, "News"));
    }

    if (!props.news.length) {
        return <Loading />
    } else {
        return (
            <div className={news_style.news}>
                {props.news.map(n => {
                    return <NewsBlock id={n.id} name={n.name} key={n.id} />
                })}
                <div className={news_style.addBlock} onClick={sendToDAL}><p>Додати новину</p></div>
            </div>
        );
    }
}

export default News;