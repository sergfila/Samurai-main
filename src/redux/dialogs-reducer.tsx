import {
    ActionsTypes,
    AddChatMessageActionType,
    StateChatsDataType,
    StateMessagesPageType,
    UpdateNewMessageTextActionType
} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (state: StateMessagesPageType, action: ActionsTypes) => {

    switch(action.type) {
        case "ADD-CHAT-MESSAGE":
            const newChatMessage: StateChatsDataType = {
                id: v1(),
                message: state.newChatMessage,
                avatar: '/img/avatar4.png'
            }
            state.newChatMessage = ''
            state.chatsData.push(newChatMessage);
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newChatMessage = action.newText;
            return state;
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