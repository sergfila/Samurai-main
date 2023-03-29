import React from "react";
import s from './Dialogs.module.scss';
import MainTitle from "../../Elements/Titles/MainTitle";
import DialogsItem from "./DialogItem/DialogItem";
import ChatItem from "./ChatItem/ChatItem";

const Dialogs = (props: any) => {

    let dialogsElements = props.messagesPage.dialogsData.map((d: any) => <DialogsItem name={d.name} id={d.id} />);
    let chatsElements = props.messagesPage.chatsData.map((c: any) => <ChatItem message={c.message} id={c.id}/>)

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