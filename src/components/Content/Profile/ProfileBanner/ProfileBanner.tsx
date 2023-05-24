import React from "react";
import s from "./ProfileBanner.module.scss";
import {StateInfoDataType} from "../../../../redux/store";

type ProfileBannerType = {
    profileBanner: StateInfoDataType[]
}

const ProfileBanner = ({profileBanner}: ProfileBannerType) => {
    return (
        <div className={s.banner}>
            <img src={`${process.env.PUBLIC_URL}${profileBanner[0].banner}`} alt={''}/>
        </div>
    );
}

export default ProfileBanner;