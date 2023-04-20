import s from "./FriendsBar.module.scss";
import React from "react";
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";
import {StateFriendsBarType} from "../../../redux/state";

type FriendsBarType = {
    friendsBar: StateFriendsBarType[]
}

const FriendsBar = (props: FriendsBarType) => {

    let friendsBarItem = props.friendsBar.map((el) => <FriendsBarItem
        key={el.id}
        friendsBarId={el.id}
        friendsBarName={el.name}
        friendsBarAvatar={el.avatar}
    />)

    return (
        <div className={s.friends}>
            {friendsBarItem}
        </div>
    )
}

export default FriendsBar;