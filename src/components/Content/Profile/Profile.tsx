import React from "react";
import s from './Profile.module.scss';
import Posts from "./Posts/Posts";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileName from "./ProfileName/ProfileName";
import ProfileList from "./ProfileList/ProfileList";
import {ProfilePageType} from "../../../redux/state";

type ProfilePageStateType = {
    profilePageState: ProfilePageType
}

const Profile = (props: ProfilePageStateType) => {

    return (
        <div className={s.profile}>
            <div className={s.item}>
                <ProfileBanner />
                <ProfileAvatar profileAvatar={props.profilePageState.infoData} />
                <div className={s.data}>
                    <ProfileName infoDataName={props.profilePageState.infoData}/>
                    <ProfileList infoDataList={props.profilePageState.infoData}/>
                </div>
            </div>
            <div className={s.item}>
                <Posts postsDataItems={props.profilePageState.postsData}/>
            </div>
        </div>
    );
}

export default Profile;