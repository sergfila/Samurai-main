import React from "react";
import s from './Sidebar.module.scss';
import Navbar from "./Navbar/Navbar";
import FriendsBar from "./FriendsBar/FriendsBar";

const Sidebar = (props: any) => {

    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsBar friendsbar={props.sidebar.friendsBar}/>
        </div>
    );
}

export default Sidebar;