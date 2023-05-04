import s from "./ChatItem.module.scss";
import React from "react";

type ChatItemType = {
    message: string
    id: string
    avatar: string
}

const ChatItem = (props: ChatItemType) => {

    return (
        <div className={s.chat}>
            <div className={s.avatar}>
                <img src={`${process.env.PUBLIC_URL}${props.avatar}`} alt={''}/>

            </div>
            <div className={s.text}>
                {props.message}
            </div>
        </div>
    )
}

export default ChatItem;