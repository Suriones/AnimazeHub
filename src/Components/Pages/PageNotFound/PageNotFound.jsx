import React from "react";
import pageNotFound_style from "./PageNotFound.scss"

const PageNotFound = React.memo(() => {
    return <div className={pageNotFound_style.error}><h1>Page not found 404</h1></div>
})

export default PageNotFound;