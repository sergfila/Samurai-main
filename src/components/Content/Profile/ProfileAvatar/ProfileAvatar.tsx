import React from "react";
import s from "./ProfileAvatar.module.scss";
import {StateInfoDataType} from "../../../../redux/store";

type ProfileAvatarType = {
    profileAvatar: StateInfoDataType[]
}

const ProfileAvatar = ({profileAvatar}: ProfileAvatarType) => {
    return (
        <div className={s.avatar}>
            <img src={`${process.env.PUBLIC_URL}${profileAvatar[0].avatar}`} alt={''}/>
        </div>
    );
}

export default ProfileAvatar;