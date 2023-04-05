import s from "../PostText/PostText.module.scss";
import React from "react";

type PostTextType = {
    message: string;
    likecount: string;
}

const PostText = (props: PostTextType) => {
    return (
        <div className={s.text}>
            <div>{props.message}</div>
            <div className={s.item}>Like <span>{props.likecount}</span></div>
        </div>
    )
}

export default PostText;