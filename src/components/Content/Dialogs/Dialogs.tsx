import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './Dialogs.module.scss';
import MainTitle from "../../Elements/Titles/MainTitle";
import DialogsItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";
import {StateMessagesPageType} from "../../../redux/state";

type MessagesPageType = {
    messagesPage: StateMessagesPageType
    addChatMessage: (chatMessage: string) => void

}

const Dialogs = (props: MessagesPageType) => {

    let dialogsElements = props.messagesPage.dialogsData.map((el) => <DialogsItem
        key={el.id}
        name={el.name}
        id={el.id} />);
    let chatsElements = props.messagesPage.chatsData.map((el) => <ChatItem
        key={el.id}
        message={el.message}
        id={el.id}
        avatar={el.avatar} />)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addNewMessage= () => {
        if (newMessageElement.current) {
            let message = newMessageElement.current.value
            props.addChatMessage(message)
            newMessageElement.current.value = '';
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        return e.key === "Enter" && e.shiftKey ? addNewMessage() : null
    }

    return (
        <div className={s.wrapper}>
            <MainTitle title="Dialogs"/>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <ul className={s.chats}>
                    {chatsElements}
                    <div className={s.elements}>
                        <textarea
                            ref={newMessageElement}
                            onKeyPress={onKeyPressHandler}
                        >

                        </textarea>
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;