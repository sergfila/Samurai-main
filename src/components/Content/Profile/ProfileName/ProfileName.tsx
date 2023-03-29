import s from "./ProfileName.module.scss";
import React from "react";

export const ProfileName = (props: any) => {

    return (
        <div className={s.name}>{props.infoData[0].name}</div>
    )
}

export default ProfileName;