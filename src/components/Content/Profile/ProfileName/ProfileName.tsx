import s from "./ProfileName.module.scss";
import React from "react";
import {InfoDataType} from "../../../../redux/state";

type InfoDataNameType = {
    infoDataName: InfoDataType[]
}

export const ProfileName = (props: InfoDataNameType) => {

    return (
        <div className={s.name}>{props.infoDataName[0].name}</div>
    )
}

export default ProfileName;