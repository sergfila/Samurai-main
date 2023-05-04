import s from './FriendsBarItem.module.scss'
import React from "react";

type FriendsBarType = {
    friendsBarId: string
    friendsBarName: string
    friendsBarAvatar: string
}

const FriendsBarItem = (props: FriendsBarType) => {

    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src={`${process.env.PUBLIC_URL}${props.friendsBarAvatar}`} alt={''}/>
            </div>
            <div className={s.name}>
                {props.friendsBarName}
            </div>
        </div>
    )
}

export default FriendsBarItem;