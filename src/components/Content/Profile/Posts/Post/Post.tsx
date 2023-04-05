import s from "./Post.module.scss";
import React from "react";
import PostAvatar from "./PostAvatar/PostAvatar";
import PostText from "./PostText/PostText";

type PostDataType = {
    messagePost: string
    likecountPost: string
    avatarPost: string
}

const Post = (props: PostDataType) => {

    return (
        <div className={s.item}>
            <PostAvatar postAvatar={props.avatarPost}/>
            <PostText message={props.messagePost} likecount={props.likecountPost}/>
        </div>
    )
}

export default Post;