import React, {KeyboardEvent} from "react";
import s from './Dialogs.module.scss';
import MainTitle from "../../Elements/Titles/MainTitle";
import DialogsItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";
import {StateMessagesPageType} from "../../../redux/store";

type MessagesPageType = {
    messagesPage: StateMessagesPageType
    addNewMessage: () => void
    onMessageChange: (text: string) => void
}

const Dialogs = ({messagesPage, addNewMessage, onMessageChange}: MessagesPageType) => {

    let dialogsElements = messagesPage.dialogsData.map((el) => <DialogsItem
        key={el.id}
        name={el.name}
        id={el.id} />);
    let chatsElements = messagesPage.chatsData.map((el) => <ChatItem
        key={el.id}
        message={el.message}
        id={el.id}
        avatar={el.avatar} />)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const handlerAddNewMessage= () => {
        if (newMessageElement.current) {
            addNewMessage()
        }
    }
    const handlerOnMessageChange = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current.value
            onMessageChange(text)
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        return e.key === "Enter" && e.shiftKey ? handlerAddNewMessage() : null
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
                            value={messagesPage.newChatMessage}
                            onChange={handlerOnMessageChange}
                            ref={newMessageElement}
                            onKeyPress={onKeyPressHandler}
                        />
                        <button onClick={handlerAddNewMessage}>Send</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;