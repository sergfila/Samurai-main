import s from "./ProfileList.module.scss";
import React from "react";
import {StateInfoDataType} from "../../../../redux/store";

type ProfileListType = {
    profileList: StateInfoDataType[]
}

const ProfileList = ({profileList}: ProfileListType) => {
    return (
        <div className={s.list}>
            <ul>
                <li>Date of Birth: <span>{profileList[0].date}</span></li>
                <li>City: <span>{profileList[0].city}</span></li>
                <li>Education: <span>{profileList[0].education}</span></li>
                <li>Web Site: <span><a href={profileList[0].website} target="_blank">{profileList[0].website}</a></span>
                </li>
            </ul>
        </div>
    )
}

export default ProfileList;