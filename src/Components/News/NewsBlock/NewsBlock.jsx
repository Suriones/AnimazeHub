import React from "react";
import newsBlock_style from "./NewsBlock.scss"

const NewsBlock = (props) => {
    return (
        <div className={newsBlock_style.block}>
            <p>{props.name}</p>
        </div>
    )
}

export default NewsBlock;