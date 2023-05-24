import React from "react";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialogs-reducer";
import {StateMessagesPageType} from "../../../redux/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    messagesPage: StateMessagesPageType
}
type MapDispatchToPropsType = {
    addNewMessage: () => void
    onMessageChange: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        },
        onMessageChange: (text: string) => {
            const action = onMessageChangeActionCreator(text)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;