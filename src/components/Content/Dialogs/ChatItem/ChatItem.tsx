import s from "./ChatItem.module.scss";
import React from "react";

type ChatItemPropsType = {
    message: string;
    id: string;
}

const ChatItem = (props: ChatItemPropsType) => {

    return (
        <div className={s.chat}>
            <div className={s.avatar}>
                <img src={require("./avatar3.png")} alt={''}/>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
        </div>
    )
}

export default ChatItem;