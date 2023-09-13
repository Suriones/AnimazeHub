import React from "react";

const News = (props) => {
    return <div className="card-group">
        {props.addNews}
        {props.newsComponents}
    </div>
}

export default News;