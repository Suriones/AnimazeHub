import React from "react";

const News = (props) => {
    return <div>
        {props.addNews}
        {props.newsComponents}
    </div>
}

export default News;