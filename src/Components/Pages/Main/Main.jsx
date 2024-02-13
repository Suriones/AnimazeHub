import React, { useState } from "react";
import main_s from "./Main.module.scss"
import AnimeTips from "../../ReusableComponents/AnimeTips/AnimeTips.jsx";

const Main = (props) => {

    const [numberPages, setNumberPages] = useState([0, 3]);

    const reviewExpansion = (down) => {
        if (down)
            return numberPages[1] < props.reviewComponents.length ? setNumberPages([numberPages[0] + 1, numberPages[1] + 1]) : null;
        else
            return numberPages[0] > 0 ? setNumberPages([numberPages[0] - 1, numberPages[1] - 1]) : null;
    }

    return <div>
        <div className={main_s.reviewContainer}>
            <div className={main_s.reviewContent}>
                {props.reviewComponents.slice(numberPages[0], numberPages[1])}
            </div>

            <div className={main_s.reviewScrollButton}>
                <div className={`${main_s.wrapperArrow} ${main_s.arrow_top}`}>
                    <div className={`${main_s.arrow} ${main_s.topArrow}`}>
                        <img style={numberPages[0] === 0 ? { opacity: 0.3, cursor: "default" } : null} onClick={() => reviewExpansion(false)} src="/arrow.png"></img>
                    </div>
                </div>

                <div className={`${main_s.wrapperArrow} ${main_s.arrow_bottom}`}>
                    <div className={main_s.arrow}>
                        <img style={numberPages[1] === props.reviewComponents.length ? { opacity: 0.3, cursor: "default" } : null} onClick={() => reviewExpansion(true)} src="/arrow.png"></img>
                    </div>
                </div>
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