import React from "react";
import { NavLink } from "react-router-dom";
import header_s from "./Header.module.scss";
import animazePNG from "./../../../public/animaze.png";
import facebookICON from "./../../../public/facebook_icon.png";
import telegramICON from "./../../../public/telegram_icon.png";
import instagramICON from "./../../../public/instagram_icon.png";
import youtubeICON from "./../../../public/youtube_icon.png";
import iconList from "./../../../public/icon_list.png"

const Header = (props) => {
    return <header>
        <div className={header_s.line}></div>
        <div className={header_s.mainHeader}>
            <div className={header_s.logo}>
                <img src={animazePNG}></img>
                <NavLink to="/"><div className={header_s.newsButton}></div></NavLink>
            </div>

            <nav className={header_s.navigation}>
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "#FFB6C1" : null,
                            textDecoration: isActive ? "solid underline #FFB6C1 2px" : null
                        })} to="/anime" end>Anime</NavLink>
                    </li>
                    <li>
                        <a className={header_s.locked}>Anime Movies</a>
                    </li>
                    <li>
                        <a className={header_s.locked}>Manga</a>
                    </li>
                    <li>
                        <a className={header_s.locked}>Art Books</a>
                    </li>
                    <li>
                        <a className={header_s.locked}>Shop</a>
                    </li>
                </ul>
                <div className={header_s.dropdown}>
                    <img className={header_s.mainmenubtn} src={iconList}></img>
                    <div className={header_s.dropdownChild}>
                        <NavLink className={header_s.navlink} to="/anime">Anime</NavLink>
                        <a className={`${header_s.navlink} ${header_s.lockedNavlink}`}>Anime Movies</a>
                        <a className={`${header_s.navlink} ${header_s.lockedNavlink}`}>Manga</a>
                        <a className={`${header_s.navlink} ${header_s.lockedNavlink}`}>Art Books</a>
                        <a className={`${header_s.navlink} ${header_s.lockedNavlink}`}>Shop</a>
                    </div>
                </div>
            </nav>

            {props.authorization}

            <div className={header_s.socialMedia}>
                <img src={facebookICON}></img>
                <img src={telegramICON}></img>
                <img src={instagramICON}></img>
                <img src={youtubeICON}></img>
            </div>
        </div>
    </header >
}

export default Header;