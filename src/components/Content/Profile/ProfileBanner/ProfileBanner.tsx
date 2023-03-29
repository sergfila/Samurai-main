import React from "react";
import s from "./ProfileBanner.module.scss";

const ProfileBanner = () => {
    return (
        <div className={s.banner}>
            <img src={require('./banner2.jpg')} alt={''}/>
        </div>
    );
}

export default ProfileBanner;