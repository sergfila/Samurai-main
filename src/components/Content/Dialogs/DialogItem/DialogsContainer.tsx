import React from "react";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {ActionsTypes, StateMessagesPageType} from "../../../../redux/store";

type MessagesPageType = {
    messagesPage: StateMessagesPageType
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: MessagesPageType) => {

    const addNewMessage= () => {
        props.dispatch(addNewMessageActionCreator())
    }
    const onMessageChange = (text: string) => {
        const action = onMessageChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <Dialogs addNewMessage={addNewMessage} onMessageChange={onMessageChange} messagesPage={props.messagesPage}/>
    )
}

export default DialogsContainer;