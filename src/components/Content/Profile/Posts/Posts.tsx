import React from "react";
import s from "./Posts.module.scss";
import TextArea from "../../../Elements/TextArea/TextArea";
import MainButton from "../../../Elements/Buttons/MainButton";
import MainTitle from "../../../Elements/Titles/MainTitle";
import Post from "./Post/Post";
import {PostsDataType} from "../../../../redux/state";

type postsDataItems = {
    postsDataItems: PostsDataType[]
}

const Posts = (props: postsDataItems) => {

    let postsElements = props.postsDataItems.map((el) =>
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