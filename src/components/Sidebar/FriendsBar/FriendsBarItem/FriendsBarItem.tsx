import s from './FriendsBarItem.module.scss'
import React from "react";
import {FriendsBarType} from "../../../../redux/state";

const FriendsBarItem: React.FC<FriendsBarType> = (props) => {

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