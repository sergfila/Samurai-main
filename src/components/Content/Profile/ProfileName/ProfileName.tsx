import s from "./ProfileName.module.scss";
import React from "react";
import {StateInfoDataType} from "../../../../redux/store";

type ProfileNameType = {
    profileName: StateInfoDataType[]
}

export const ProfileName = (props: ProfileNameType) => {

    return (
        <div className={s.name}>{props.profileName[0].name}</div>
    )
}

export default ProfileName;