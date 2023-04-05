export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,
    sidebar: SidebarType
}
export type ProfilePageType = {
    postsData: PostsDataType[],
    infoData: InfoDataType[]
}
export type PostsDataType = {
    id: number
    message: string
    likeCount: string
    avatar: string
}
export type InfoDataType = {
    id: number,
    date: string,
    name: string,
    city: string,
    education: string,
    website: string,
    avatar: string
}
export type MessagesPageType = {
    dialogsData: DialogsDataType[],
    chatsData: ChatsDataType[]
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type ChatsDataType = {
    id: number,
    message: string
}
export type SidebarType = {
    friendsBar: FriendsBarType[]
}
export type FriendsBarType = {
    id: number,
    name: string,
    avatar: string
}

export const state: StateType = {

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
            {id: 1, message: 'Hey'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Fine'},
            {id: 4, message: 'Good Bye'},
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