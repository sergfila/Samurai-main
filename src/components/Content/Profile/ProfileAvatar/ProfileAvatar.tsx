import React from "react";
import s from "./ProfileAvatar.module.scss";

const ProfileAvatar = () => {
    return (
        <div className={s.avatar}>
            <img src={require('./avatar3.png')} alt={''}/>
        </div>
    );
}

export default ProfileAvatar;