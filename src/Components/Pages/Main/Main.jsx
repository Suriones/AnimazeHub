import React from "react";
import main_s from "./Main.module.scss"
import AnimeTips from "../../ReusableComponents/AnimeTips/AnimeTips.jsx";
import { NavLink } from "react-router-dom";

const Main = (props) => {
    const visibleReviewComponents = props.reviewComponents.slice(0, 3);

    return <div>
        <div className={main_s.reviewContainer}>
            {visibleReviewComponents}
            <div className={main_s.tools}>
                {props.admin ? <div className={main_s.addNewsButton}><NavLink to="/addReview"><button>Add Voluminous News</button></NavLink></div> : null}
                <div className={main_s.arrow}><img src="/arrow.png"></img></div>
            </div>
        </div>
        <div className={main_s.newsCardContainer}>
            <div className={main_s.newsContainer}>
                {props.newsComponents}
            </div>
            <div className={main_s.informationContainer}>
                <AnimeTips anime={props.anime} />
            </div>
        </div>
    </div>
}

export default Main;