import React from "react";
import s from "./Posts.module.scss";
import TextArea from "../../../Elements/TextArea/TextArea";
import MainButton from "../../../Elements/Buttons/MainButton";
import MainTitle from "../../../Elements/Titles/MainTitle";
import Post from "./Post/Post";
import {StatePostsDataType} from "../../../../redux/state";

type ProfilePostsType = {
    profilePosts: StatePostsDataType[]
}

const Posts = (props: ProfilePostsType) => {

    let postsElements = props.profilePosts.map((el) =>
        <Post messagePost={el.message}
              likecountPost={el.likeCount}
              avatarPost={el.avatar}
        />)

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <MainTitle title="My Posts"/>
                <div className={s.form}>
                    <TextArea />
                    <MainButton />
                </div>
            </div>
            <div className={s.content}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;