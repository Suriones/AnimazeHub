import React from "react";
import { NavLink } from "react-router-dom";
import header_s from "./Header.module.scss"

const Header = (props) => {
    return <header>
        <div className={header_s.line}></div>
        <div className={header_s.mainHeader}>
            <div className={header_s.logo}>
                <img src="/animaze.png"></img>
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
                    <img className={header_s.mainmenubtn} src="/icon_list.png"></img>
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
                <img src="/facebook_icon.png"></img>
                <img src="/telegram_icon.png"></img>
                <img src="/instagram_icon.png"></img>
                <img src="/youtube_icon.png"></img>
            </div>
        </div>
    </header >
}

export default Header;