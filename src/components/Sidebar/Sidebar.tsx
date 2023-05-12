import React from "react";
import s from './Sidebar.module.scss';
import {Navbar} from "./Navbar/Navbar";
import FriendsBar from "./FriendsBar/FriendsBar";
import {StateSidebarType} from "../../redux/store";

type SidebarType = {
    sidebar: StateSidebarType
}

const Sidebar = (props: SidebarType) => {

    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsBar friendsBar={props.sidebar.friendsBar}/>
        </div>
    );
}

export default Sidebar;