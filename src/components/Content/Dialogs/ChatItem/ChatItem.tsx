import s from "./ChatItem.module.scss";
import React from "react";

type ChatItemType = {
    id: string
    message: string
    avatar: string
}

const ChatItem = ({id, message, avatar}: ChatItemType) => {

    return (
        <div className={s.chat}>
            <div className={s.avatar}>
                <img src={`${process.env.PUBLIC_URL}${avatar}`} alt={''}/>
            </div>
            <div className={s.text}>
                {message}
            </div>
        </div>
    )
}

export default ChatItem;