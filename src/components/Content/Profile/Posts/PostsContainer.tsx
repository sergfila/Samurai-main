import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../../redux/profile-reducer";
import {StateProfilePageType} from "../../../../redux/store";
import Posts from "./Posts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: StateProfilePageType
}
type MapDispatchToPropsType = {
    addPost : () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText : (text: string) => {
            const action = onPostChangeActionCreator(text)
            dispatch(action)
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;