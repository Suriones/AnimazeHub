import React, { useEffect, useState } from "react";
import NewsBlock from "./NewsBlock/NewsBlock.jsx"
import Loading from "../Loading/Loading.jsx";
import News from "./News.jsx";
import newsBlock_style from "./NewsBlock/NewsBlock.scss";

const NewsContainer = React.memo((props) => {

    useEffect(() => {
        props.dispatch(props.newsDAL.getAll());
    }, [props.checkerUpdate]);

    const sendToDAL = () => {
        props.dispatch(props.newsDAL.postNews(props.news.length, "News", addNewsTextArea.current.value));
        setInputText("");
    }

    const addNewsTextArea = React.createRef();
    const [inputText, setInputText] = useState("");

    let addNews;

    if (props.authData.authStatus === true && props.authData.admin === true) {
        addNews = <div className={newsBlock_style.block}>
            <div className="card">
                <div className={`${newsBlock_style.bodyBlock} ${newsBlock_style.addNews}`}>
                    <h5 className="card-title"><div className={newsBlock_style.postNews}>Post news</div></h5>
                    <div className="form-group">
                        <textarea ref={addNewsTextArea} value={inputText} onChange={() => setInputText(addNewsTextArea.current.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <p><button type="button" onClick={sendToDAL} className="btn btn-success">Send</button></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Author: admin</small>
                </div>
            </div>
        </div>
    }

    if (!props.news.length) {
        return <Loading />
    } else {

        let newsComponents = [];

        props.news.map(n => {
            newsComponents.push(<NewsBlock id={n.id} name={n.name} key={n.id} value={n.value} />);
        })

        return <News newsComponents={newsComponents} addNews={addNews} />
    }
})

export default NewsContainer;