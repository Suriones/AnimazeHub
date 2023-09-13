import React from "react";
import newsBlock_style from "./NewsBlock.scss"

const NewsBlock = (props) => {
    return <div className={newsBlock_style.block}>
        <div className="card">
            <div className="card-body">
                <div className={newsBlock_style.bodyBlock}>
                    <h5 className="card-title">{props.name} {props.id + 1}</h5>
                    <p className="card-text">{props.value}</p>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted">Author: admin</small>
            </div>
        </div>
    </div>
}

export default NewsBlock;