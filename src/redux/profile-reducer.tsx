import {
    ActionsTypes, AddPostActionType,
    StatePostsDataType, StateProfilePageType,
    UpdateNewPostTextActionType
} from "./store";
import {v1} from "uuid";

let initialState: StateProfilePageType = {
    postsData: [
        {id: v1(), message: 'HK is my favorite game!', likeCount: '10', avatar: '/img/avatar4.png'},
        {id: v1(), message: 'My first post', likeCount: '3', avatar: '/img/avatar4.png'}
    ],
    infoData: [
        {
            id: v1(),
            date: '24.02.2005',
            name: 'Hornet',
            city: 'Hallownest',
            education: 'Master of needle and thread',
            website: 'https://www.hollowknight.com/',
            banner: '/img/banner4.jpg',
            avatar: '/img/avatar4.png'
        }
    ],
    newPostText: ''
}

const profileReducer = (state: StateProfilePageType = initialState, action: ActionsTypes) => {
    switch(action.type) {
        case "ADD-POST":
            const newPost: StatePostsDataType = {
                id: v1(),
                message: state.newPostText,
                likeCount: '0',
                avatar: '/img/avatar4.png'
            }
            return {...state, newPostText: '', postsData: [newPost,...state.postsData]}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
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