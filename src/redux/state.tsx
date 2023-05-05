import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

export type StateGlobalType = {
    profilePage: StateProfilePageType
    messagesPage: StateMessagesPageType
    sidebar: StateSidebarType
}
export type StateProfilePageType = {
    postsData: StatePostsDataType[]
    infoData: StateInfoDataType[]
    newPostText: string
}
export type StatePostsDataType = {
    id: string
    message: string
    likeCount: string
    avatar: string
}
export type StateInfoDataType = {
    id: string
    date: string
    name: string
    city: string
    education: string
    website: string
    avatar: string
}
export type StateMessagesPageType = {
    dialogsData: StateDialogsDataType[]
    chatsData: StateChatsDataType[]
    newChatMessage: string
}
export type StateDialogsDataType = {
    id: string
    name: string
}
export type StateChatsDataType = {
    id: string
    message: string
    avatar: string
}
export type StateSidebarType = {
    friendsBar: StateFriendsBarType[]
}
export type StateFriendsBarType = {
    id: string
    name: string
    avatar: string
}

export type StoreType = {
    _state: StateGlobalType
    subscribe: (callback: () => void) => void
    _onChange: () => void
    getState: () => StateGlobalType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | AddChatMessageActionType
    | UpdateNewMessageTextActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type AddChatMessageActionType = {
    type: 'ADD-CHAT-MESSAGE'
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}


export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'HK is my favorite game!', likeCount: '10', avatar: '/img/avatar4.png'},
                {id: v1(), message: 'My first post', likeCount: '3', avatar: '/img/avatar4.png'}
            ],

            infoData: [
                {id: v1(), date: '24.02.2005', name: 'Hornet', city: 'Hallownest', education: 'Master of needle and thread', website: 'https://www.hollowknight.com/', avatar: '/img/avatar4.png'}
            ],

            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: v1(), name: 'The Knight'},
                {id: v1(), name: 'Monomon the Teacher'},
                {id: v1(), name: 'Iselda'},
                {id: v1(), name: 'Caspian'},
                {id: v1(), name: 'Cornifer'},
            ],
            chatsData: [
                {id: v1(), message: 'Hey', avatar: '/img/avatar4.png'},
                {id: v1(), message: 'How are you?', avatar: '/img/avatar4.png'},
                {id: v1(), message: 'Fine', avatar: '/img/avatar4.png'},
                {id: v1(), message: 'Good Bye', avatar: '/img/avatar4.png'},
            ],

            newChatMessage: ''
        },
        sidebar: {
            friendsBar: [
                {id: v1(), name: 'The Knight', avatar: '/img/avatar1.png'},
                {id: v1(), name: 'Grimm', avatar: '/img/avatar2.png'},
                {id: v1(), name: 'Cornifer', avatar: '/img/avatar3.png'},
            ]
        }
    },
    _onChange() {
        console.log()
    },
    subscribe (callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange()
    }
}
