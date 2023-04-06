import React from "react";
import s from './Dialogs.module.scss';
import MainTitle from "../../Elements/Titles/MainTitle";
import DialogsItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";
import {StateMessagesPageType} from "../../../redux/state";

type MessagesPageType = {
    messagesPage: StateMessagesPageType
}

const Dialogs = (props: MessagesPageType) => {

    let dialogsElements = props.messagesPage.dialogsData.map((el) => <DialogsItem
        name={el.name}
        id={el.id} />);
    let chatsElements = props.messagesPage.chatsData.map((el) => <ChatItem
        message={el.message}
        id={el.id}
        avatar={el.avatar} />)

    return (
        <div className={s.wrapper}>
            <MainTitle title="Dialogs"/>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <ul className={s.chats}>
                    {chatsElements}
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;