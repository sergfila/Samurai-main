import React from "react";
import s from "./ProfileAvatar.module.scss";
import {StateInfoDataType} from "../../../../redux/state";

type ProfileAvatarType = {
    profileAvatar: StateInfoDataType[]
}

const ProfileAvatar = (props: ProfileAvatarType) => {
    return (
        <div className={s.avatar}>
            <img src={`${process.env.PUBLIC_URL}${props.profileAvatar[0].avatar}`} alt={''}/>
        </div>
    );
}

export default ProfileAvatar;