import React from "react";
import s from './Sidebar.module.scss';
import {Navbar} from "./Navbar/Navbar";
import FriendsBar from "./FriendsBar/FriendsBar";
import {SidebarType} from "../../redux/state";

type GlobalSidebarType = {
    globalSidebar: SidebarType
}

const Sidebar = (props: GlobalSidebarType) => {

    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsBar friendsbar={props.globalSidebar.friendsBar}/>
        </div>
    );
}

export default Sidebar;