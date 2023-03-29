import s from "../PostAvatar/PostAvatar.module.scss";
import React from "react";

const PostAvatar = () => {
    return (
        <div className={s.avatar}>
            <img src={require('./avatar3.png')} alt={''}/>
        </div>
    )
}

export default PostAvatar;