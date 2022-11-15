import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <img src={"https://i.scdn.co/image/ab67706c0000bebb7d7e5ac5531d35279b8229a5"}/>
            <div className={style.content}>
                <NavLink to={"/mainPage"} className={({ isActive }) => isActive ? style.active : null}>Main</NavLink>
                <NavLink to={"/playingHistory"} className={({ isActive }) => isActive ? style.active : null}>History</NavLink>
            </div>
        </div>
    )
}
export default Header;