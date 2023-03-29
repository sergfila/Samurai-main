let state = {

    profilePage: {
        postsData: [
            {id: "1", message: 'HK is my favorite game!', likeCount: '10'},
            {id: "2", message: 'My first post', likeCount: '3'}
        ],

        infoData: [
            {id: 1, date: '24.02.2005', name: 'Hornet', city: 'Hallownest', edication: 'Master of needle and thread', website: 'https://www.hollowknight.com/', avatar: '/img/avatar3.png'}
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: "1", name: 'The Knight'},
            {id: "2", name: 'Monomon the Teacher'},
            {id: "3", name: 'Iselda'},
            {id: "4", name: 'Caspian'},
            {id: "5", name: 'Cornifer'},
        ],
        chatsData: [
            {id: "1", message: 'Hey'},
            {id: "2", message: 'How are you?'},
            {id: "3", message: 'Fine'},
            {id: "4", message: 'Good Bye'},
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

export default state;