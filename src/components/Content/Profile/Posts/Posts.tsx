import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Posts.module.scss";
import TextArea from "../../../Elements/TextArea/TextArea";
import MainButton from "../../../Elements/Buttons/MainButton";
import MainTitle from "../../../Elements/Titles/MainTitle";
import Post from "./Post/Post";
import {StatePostsDataType} from "../../../../redux/state";

type ProfilePostsType = {
    profilePosts: StatePostsDataType[]
    addPost: (postMessage: string) => void
}

const Posts = (props: ProfilePostsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const postsElements = props.profilePosts.map((el) =>
        <Post key={el.id} messagePost={el.message}
              likecountPost={el.likeCount}
              avatarPost={el.avatar}
        />)

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value = '';
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            addPost();
        }

    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <MainTitle title="My Posts"/>
                <div className={s.form}>
                    <textarea
                        ref={newPostElement}
                        onKeyPress={onKeyPressHandler}
                    >
                    </textarea>
                    <button
                        onClick={addPost}
                    >Send
                    </button>
                </div>
            </div>
            <div className={s.content}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;