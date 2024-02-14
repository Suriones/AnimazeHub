import React from "react";
import animeTips_s from "./animeTips.module.scss";
import { NavLink } from "react-router-dom";
import ratingPNG from "./../../../../public/rating.png";
import likePNG from "./../../../../public/like.png";

const AnimeTips = (props) => {

    const FirstSlide = React.createRef(),
        SecondSlide = React.createRef(),
        ThirdSlide = React.createRef(),
        FourthSlide = React.createRef(),
        FifthSlide = React.createRef();

    const massiveSlides = [FirstSlide, SecondSlide, ThirdSlide, FourthSlide, FifthSlide];

    const topFiveAnime = (() => {
        const mostLikeAnimeList = props.anime.map(item => item);
        mostLikeAnimeList.sort((a, b) => a.like > b.like ? -1 : 1);

        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push(<div key={`recomendation: ${i} ${massiveSlides[i].animeID}`} ref={massiveSlides[i]} className={i ? animeTips_s.slidesOff : animeTips_s.slidesOn}>
                <div className={animeTips_s.number}>{i + 1} / 5</div>
                <NavLink to={`/anime/${mostLikeAnimeList[i].animeID}`}><img src={mostLikeAnimeList[i].img}></img></NavLink>
                <div className={animeTips_s.captionContainer}>
                    <div id={animeTips_s.caption}>
                        <p>{mostLikeAnimeList[i].name}</p>
                    </div>
                    <p className={animeTips_s.like}>{mostLikeAnimeList[i].like}</p>
                    <img src={likePNG}></img>
                </div>
            </div>);
        }

        return result;
    })();

    let tmp = 0;

    const switchSlide = (number) => {
        if (tmp === 0 && number < 0 || tmp === 4 && number > 0) {
            return null;
        }

        massiveSlides[tmp].current.className = animeTips_s.slidesOff;
        tmp = tmp + number;
        massiveSlides[tmp].current.className = animeTips_s.slidesOn;
    }

    return <div className={animeTips_s.animeTips}>
        <div className={animeTips_s.information}>
            <img src={ratingPNG}></img>
            <h3>Recommendations</h3>
        </div>
        <div className={animeTips_s.description}>
            <a>Like anime and take part in the rating</a>
        </div>
        <div className={animeTips_s.animeTipsContainer}>
            <div className={animeTips_s.container}>
                {topFiveAnime}
                <a className={animeTips_s.prev} onClick={() => switchSlide(-1)}>&#10094;</a>
                <a className={animeTips_s.next} onClick={() => switchSlide(1)}>&#10095;</a>
            </div>
        </div>
    </div>
}

export default AnimeTips;