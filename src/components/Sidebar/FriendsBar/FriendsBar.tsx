import s from "./FriendsBar.module.scss";
import React from "react";
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";

const FriendsBar = (props: any) => {

    let friendsBarItem = props.friendsbar.map((p: any) => <FriendsBarItem id={p.id} name={p.name} avatar={p.avatar}/>)
    console.log(friendsBarItem)
    return (
        <div className={s.friends}>
            {friendsBarItem}
        </div>
    )
}

export default FriendsBar;