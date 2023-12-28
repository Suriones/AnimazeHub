import React from "react";
import { NavLink } from "react-router-dom";
import pageNotFound_s from "./PageNotFound.module.scss"

const PageNotFound = React.memo(() => {
    return <div className={pageNotFound_s.pageNotFoundComponent}>
        <div className={pageNotFound_s.pageNotFoundBlock}>
            <h1>404</h1>
            <p> <span className={pageNotFound_s.oops}>Opps!</span> Page not found.</p>
            <p>The page you’re looking for doesn’t exist.</p>
            <NavLink to="/"><button>Go Home</button></NavLink>
        </div>
    </div>
})

export default PageNotFound;