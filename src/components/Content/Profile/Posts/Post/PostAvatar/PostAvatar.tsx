import s from "../PostAvatar/PostAvatar.module.scss";
import React from "react";

type PostAvatarType = {
    postAvatar: string;
}

const PostAvatar = ({postAvatar}: PostAvatarType) => {
    return (
        <div className={s.avatar}>
            <img src={`${process.env.PUBLIC_URL}${postAvatar}`} alt={''}/>
        </div>
    )
}

export default PostAvatar;