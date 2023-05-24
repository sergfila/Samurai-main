import s from "./ProfileName.module.scss";
import React from "react";
import {StateInfoDataType} from "../../../../redux/store";

type ProfileNameType = {
    profileName: StateInfoDataType[]
}

export const ProfileName = ({profileName}: ProfileNameType) => {

    return (
        <div className={s.name}>{profileName[0].name}</div>
    )
}

export default ProfileName;