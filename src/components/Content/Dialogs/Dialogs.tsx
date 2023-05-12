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

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addNewMessage= () => {
        if (newMessageElement.current) {
            props.addNewMessage()
        }
    }
    const onMessageChange = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current.value
            props.onMessageChange(text)
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
                            value={props.messagesPage.newChatMessage}
                            onChange={onMessageChange}
                            ref={newMessageElement}
                            onKeyPress={onKeyPressHandler}
                        />
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;