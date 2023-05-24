import {
    ActionsTypes,
    AddChatMessageActionType,
    StateChatsDataType,
    StateMessagesPageType,
    UpdateNewMessageTextActionType
} from "./store";
import {v1} from "uuid";

const initialState: StateMessagesPageType = {
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
}

export const dialogsReducer = (state: StateMessagesPageType = initialState, action: ActionsTypes): StateMessagesPageType => {

    switch(action.type) {
        case "ADD-CHAT-MESSAGE":
            const newChatMessage: StateChatsDataType = {
                id: v1(),
                message: state.newChatMessage,
                avatar: '/img/avatar4.png'
            }
            return {...state, newChatMessage: '', chatsData: [newChatMessage,...state.chatsData]};
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newChatMessage: action.newText};
        default:
            return state;
    }
}

export const addNewMessageActionCreator = (): AddChatMessageActionType => {
    return {
        type: 'ADD-CHAT-MESSAGE'
    }
}
export const onMessageChangeActionCreator = (newText: string): UpdateNewMessageTextActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    }
}

export default dialogsReducer