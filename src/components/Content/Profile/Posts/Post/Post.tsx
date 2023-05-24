import s from "./Post.module.scss";
import React from "react";
import PostAvatar from "./PostAvatar/PostAvatar";
import PostText from "./PostText/PostText";

type PostDataType = {
    messagePost: string
    likecountPost: string
    avatarPost: string
}

const Post = ({messagePost, likecountPost, avatarPost}: PostDataType) => {

    return (
        <div className={s.item}>
            <PostAvatar postAvatar={avatarPost}/>
            <PostText message={messagePost} likecount={likecountPost}/>
        </div>
    )
}

export default Post;