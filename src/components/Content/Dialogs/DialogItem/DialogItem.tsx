import {NavLink} from "react-router-dom";
import s from "./DialogsItem.module.scss";
import React from "react";

type DialogItemPropsType = {
    name: string;
    id: number;
}

const DialogsItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}><NavLink activeClassName={s.active} to={path}>{props.name}</NavLink></div>
    )
}

export default DialogsItem;