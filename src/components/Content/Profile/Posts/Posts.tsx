import React, {KeyboardEvent} from "react";
import s from "./Posts.module.scss";
import MainTitle from "../../../Elements/Titles/MainTitle";
import Post from "./Post/Post";
import {StateProfilePageType} from "../../../../redux/store";

type PostsType = {
    profilePage: StateProfilePageType
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const Posts = ({profilePage, addPost, updateNewPostText}: PostsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const postsElements = profilePage.postsData.map((el) =>
        <Post key={el.id} messagePost={el.message}
              likecountPost={el.likeCount}
              avatarPost={el.avatar}
        />)

    const handlerAddPost = () => {
        if (newPostElement.current) {
        addPost();
        }
    }
    const handlerOnPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            updateNewPostText(text)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && e.shiftKey) {
            handlerAddPost();
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <MainTitle title="My Posts"/>
                <div className={s.form}>
                    <textarea
                        value={profilePage.newPostText}
                        onChange={handlerOnPostChange}
                        ref={newPostElement}
                        onKeyPress={onKeyPressHandler}
                    />
                    <button
                        onClick={handlerAddPost}
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