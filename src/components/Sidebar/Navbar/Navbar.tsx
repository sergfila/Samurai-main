import s from "./Navbar.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.link}><NavLink activeClassName={s.active} to='/profile'>Profile</NavLink></div>
            <div className={s.link}><NavLink activeClassName={s.active} to='/dialogs'>Messages</NavLink></div>
            <div className={s.link}><NavLink activeClassName={s.active} to='/news'>News</NavLink></div>
            <div className={s.link}><NavLink activeClassName={s.active} to='/music'>Music</NavLink></div>
            <div className={s.link}><NavLink activeClassName={s.active} to='/settings'>Settings</NavLink></div>
            <div className={s.link}><NavLink activeClassName={s.active} to='/friends'>Friends</NavLink></div>
        </nav>
    )
}

export default Navbar;