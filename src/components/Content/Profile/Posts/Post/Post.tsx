import s from "./Post.module.scss";
import React from "react";
import PostAvatar from "./PostAvatar/PostAvatar";
import PostText from "./PostText/PostText";

const Post = (props: any) => {

    return (
        <div className={s.item}>
            <PostAvatar />
            <PostText message={props.message} likecount={props.likecount}/>
        </div>
    )
}

export default Post;