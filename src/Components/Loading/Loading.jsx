import React from "react";
import loading_style from "./Loading.scss"

const Loading = React.memo(() => {
    return <div className={loading_style.loading}><span>LOADING...</span></div>
})

export default Loading;