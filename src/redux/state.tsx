import {rerenderEntireTree} from "../render";

export type StateGlobalType = {
    profilePage: StateProfilePageType
    messagesPage: StateMessagesPageType
    sidebar: StateSidebarType
}
export type StateProfilePageType = {
    postsData: StatePostsDataType[]
    infoData: StateInfoDataType[]
}
export type StatePostsDataType = {
    id: number
    message: string
    likeCount: string
    avatar: string
}
export type StateInfoDataType = {
    id: number
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
}
export type StateDialogsDataType = {
    id: number
    name: string
}
export type StateChatsDataType = {
    id: number
    message: string
    avatar: string
}
export type StateSidebarType = {
    friendsBar: StateFriendsBarType[]
}
export type StateFriendsBarType = {
    id: number
    name: string
    avatar: string
}
export const state: StateGlobalType = {

    profilePage: {
        postsData: [
            {id: 1, message: 'HK is my favorite game!', likeCount: '10', avatar: '/img/avatar4.png'},
            {id: 2, message: 'My first post', likeCount: '3', avatar: '/img/avatar4.png'}
        ],

        infoData: [
            {id: 1, date: '24.02.2005', name: 'Hornet', city: 'Hallownest', education: 'Master of needle and thread', website: 'https://www.hollowknight.com/', avatar: '/img/avatar4.png'}
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: 'The Knight'},
            {id: 2, name: 'Monomon the Teacher'},
            {id: 3, name: 'Iselda'},
            {id: 4, name: 'Caspian'},
            {id: 5, name: 'Cornifer'},
        ],
        chatsData: [
            {id: 1, message: 'Hey', avatar: '/img/avatar4.png'},
            {id: 2, message: 'How are you?', avatar: '/img/avatar4.png'},
            {id: 3, message: 'Fine', avatar: '/img/avatar4.png'},
            {id: 4, message: 'Good Bye', avatar: '/img/avatar4.png'},
        ]
    },

    sidebar: {
        friendsBar: [
            {id: 1, name: 'The Knight', avatar: '/img/avatar1.png'},
            {id: 2, name: 'Grimm', avatar: '/img/avatar2.png'},
            {id: 3, name: 'Cornifer', avatar: '/img/avatar3.png'},
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: StatePostsDataType = {
        id: 5,
        message: postMessage,
        likeCount: '0',
        avatar: '/img/avatar4.png'
    }
    state.profilePage.postsData.unshift(newPost);
    rerenderEntireTree(state);
}

export const addChatMessage = (chatMessage: string) => {
    const newChatMessage: StateChatsDataType = {
        id: 5,
        message: chatMessage,
        avatar: '/img/avatar4.png'
    }
    state.messagesPage.chatsData.push(newChatMessage);
    rerenderEntireTree(state);
}