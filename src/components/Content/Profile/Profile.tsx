import React from "react";
import s from './Profile.module.scss';
import Posts from "./Posts/Posts";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileName from "./ProfileName/ProfileName";
import ProfileList from "./ProfileList/ProfileList";

const Profile = (props: any) => {

    return (
        <div className={s.profile}>
            <div className={s.item}>
                <ProfileBanner />
                <ProfileAvatar />
                <div className={s.data}>
                    <ProfileName infoData={props.profilePage.infoData}/>
                    <ProfileList infoData={props.profilePage.infoData}/>
                </div>
            </div>
            <div className={s.item}>
                <Posts postsData={props.profilePage.postsData}/>
            </div>
        </div>
    );
}

export default Profile;