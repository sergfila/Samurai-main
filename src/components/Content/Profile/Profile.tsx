import React from "react";
import s from './Profile.module.scss';
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileName from "./ProfileName/ProfileName";
import ProfileList from "./ProfileList/ProfileList";
import {ActionsTypes, StateProfilePageType} from "../../../redux/store";
import PostsContainer from "./Posts/PostsContainer";


type ProfilePageType = {
    profilePage: StateProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = ({profilePage, dispatch}: ProfilePageType) => {

    return (
        <div className={s.profile}>
            <div className={s.item}>
                <ProfileBanner profileBanner={profilePage.infoData}/>
                <ProfileAvatar profileAvatar={profilePage.infoData} />
                <div className={s.data}>
                    <ProfileName profileName={profilePage.infoData}/>
                    <ProfileList profileList={profilePage.infoData}/>
                </div>
            </div>
            <div className={s.item}>
                <PostsContainer />
            </div>
        </div>
    );
}

export default Profile;