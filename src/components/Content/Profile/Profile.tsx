import React from "react";
import s from './Profile.module.scss';
import Posts from "./Posts/Posts";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileName from "./ProfileName/ProfileName";
import ProfileList from "./ProfileList/ProfileList";
import {ActionsTypes, StateProfilePageType} from "../../../redux/state";

type ProfilePageType = {
    profilePage: StateProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePageType) => {

    return (
        <div className={s.profile}>
            <div className={s.item}>
                <ProfileBanner />
                <ProfileAvatar profileAvatar={props.profilePage.infoData} />
                <div className={s.data}>
                    <ProfileName profileName={props.profilePage.infoData}/>
                    <ProfileList profileList={props.profilePage.infoData}/>
                </div>
            </div>
            <div className={s.item}>
                <Posts profilePage={props.profilePage}
                       dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}

export default Profile;