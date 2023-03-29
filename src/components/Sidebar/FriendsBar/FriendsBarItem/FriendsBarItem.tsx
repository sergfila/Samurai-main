import s from './FriendsBarItem.module.scss'
import React from "react";

const FriendsBarItem = (props: any) => {

    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src={`${process.env.PUBLIC_URL}${props.avatar}`} alt={''}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
    )
}

export default FriendsBarItem;