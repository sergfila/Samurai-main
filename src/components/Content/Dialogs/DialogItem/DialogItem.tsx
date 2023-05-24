import {NavLink} from "react-router-dom";
import s from "./DialogsItem.module.scss";
import React from "react";

type DialogItemPropsType = {
    name: string;
    id: string;
}

const DialogsItem = ({name, id}: DialogItemPropsType) => {
    let path = "/dialogs/" + id;

    return (
        <div className={s.dialog}><NavLink activeClassName={s.active} to={path}>{name}</NavLink></div>
    )
}

export default DialogsItem;