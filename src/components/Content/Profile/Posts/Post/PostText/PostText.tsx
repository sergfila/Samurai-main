import s from "../PostText/PostText.module.scss";
import React from "react";

type PostTextPropsType = {
    message: string;
    likecount: string;
}

const PostText = (props: PostTextPropsType) => {
    return (
        <div className={s.text}>
            <div>{props.message}</div>
            <div className={s.item}>Like <span>{props.likecount}</span></div>
        </div>
    )
}

export default PostText;