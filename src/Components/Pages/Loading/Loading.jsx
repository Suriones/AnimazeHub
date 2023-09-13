import React from "react";
import loading_style from "./Loading.scss"

const Loading = React.memo(() => {
    return <div className={loading_style.loading}>
        <div className="spinner-border" role="status">
        </div>
    </div>
})

export default Loading;