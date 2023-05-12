import React from "react";
import {ActionsTypes, StateProfilePageType} from "../../../../redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./Posts";

type ProfilePostsContainerType = {
    dispatch: (action: ActionsTypes) => void
    profilePage: StateProfilePageType
}


const PostsContainer = (props: ProfilePostsContainerType) => {

    const onAddPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (text: string) => {
        const action = onPostChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <Posts updateNewPostText={onPostChange} addPost={onAddPost} profilePage={props.profilePage}/>
    )
}

export default PostsContainer;