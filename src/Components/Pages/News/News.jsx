import React, { useEffect } from "react";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"
import news_style from "./News.scss";
import Loading from "../../Loading/Loading.jsx";

const News = (props) => {

    useEffect(() => {
        props.dispatch(props.newsDAL.getAll());
    }, [props.checkerUpdate]);

    const sendToDAL = () => {
        props.dispatch(props.newsDAL.postNews(props.news.length, "News"));
    }

    let addNews = <div></div>;

    if (props.authData.authStatus === true && props.authData.admin === true) {
        addNews = <div className={news_style.addBlock} onClick={sendToDAL}><p>Додати новину</p></div>;
    }

    if (!props.news.length) {
        return <Loading />
    } else {
        return (
            <div className={news_style.news}>
                {props.news.map(n => {
                    return <NewsBlock id={n.id} name={n.name} key={n.id} />
                })}
                {addNews}
            </div>
        );
    }
}

export default News;