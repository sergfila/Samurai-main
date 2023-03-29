import s from "./ProfileList.module.scss";
import React from "react";

const ProfileList = (props: any) => {
    return (
        <div className={s.list}>
            <ul>
                <li>Date of Birth: <span>{props.infoData[0].date}</span></li>
                <li>City: <span>{props.infoData[0].city}</span></li>
                <li>Education: <span>{props.infoData[0].edication}</span></li>
                <li>Web Site: <span><a href={props.infoData[0].website} target="_blank">{props.infoData[0].website}</a></span>
                </li>
            </ul>
        </div>
    )
}

export default ProfileList;