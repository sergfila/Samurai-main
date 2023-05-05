import {
    ActionsTypes, AddPostActionType,
    StatePostsDataType,
    StateProfilePageType,
    UpdateNewPostTextActionType
} from "./state";
import {v1} from "uuid";

const profileReducer = (state: StateProfilePageType, action: ActionsTypes) => {

    switch(action.type) {
        case "ADD-POST":
            const newPost: StatePostsDataType = {
                id: v1(),
                message: state.newPostText,
                likeCount: '0',
                avatar: '/img/avatar4.png'
            }
            state.newPostText = '';
            state.postsData.unshift(newPost);
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType  => {
    return {
        type: "ADD-POST"
    }
}
export const onPostChangeActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}

export default profileReducer;