import React, { useEffect } from "react";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"
import Loading from "../../Loading/Loading.jsx";
import News from "./News.jsx";
import news_style from "./News.scss";

const NewsContainer = (props) => {

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

        let newsComponents = [];

        props.news.map(n => {
            newsComponents.push(<NewsBlock id={n.id} name={n.name} key={n.id} />);
        })

        return <News newsComponents={newsComponents} addNews={addNews} />
    }
}

export default NewsContainer;