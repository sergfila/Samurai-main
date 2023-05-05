import React, {KeyboardEvent} from "react";
import s from "./Posts.module.scss";
import MainTitle from "../../../Elements/Titles/MainTitle";
import Post from "./Post/Post";
import {
    ActionsTypes,
    StateProfilePageType
} from "../../../../redux/state";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/profile-reducer";

type ProfilePostsType = {
    profilePage: StateProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Posts = (props: ProfilePostsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const postsElements = props.profilePage.postsData.map((el) =>
        <Post key={el.id} messagePost={el.message}
              likecountPost={el.likeCount}
              avatarPost={el.avatar}
        />)

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(onPostChangeActionCreator(text))
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
                        value={props.profilePage.newPostText}
                        onChange={onPostChange}
                        ref={newPostElement}
                        onKeyPress={onKeyPressHandler}
                    />
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