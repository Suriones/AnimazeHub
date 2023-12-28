import React from "react";

const Like = (props) => {
    return <small><img src={props.likeStatus} onClick={props.like}></img> <a>{props.count}</a></small>
}

export default Like;