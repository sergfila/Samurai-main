import s from "../PostAvatar/PostAvatar.module.scss";
import React from "react";
import {PostsDataType} from "../../../../../../redux/state";

type PostAvatarType = {
    postAvatar: string;
}

const PostAvatar = (props: PostAvatarType) => {
    return (
        <div className={s.avatar}>
            <img src={`${process.env.PUBLIC_URL}${props.postAvatar}`} alt={''}/>
        </div>
    )
}

export default PostAvatar;