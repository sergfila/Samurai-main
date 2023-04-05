import s from "./ProfileList.module.scss";
import React from "react";
import {InfoDataType} from "../../../../redux/state";

type InfoDataListType = {
    infoDataList: InfoDataType[]
}

const ProfileList = (props: InfoDataListType) => {
    return (
        <div className={s.list}>
            <ul>
                <li>Date of Birth: <span>{props.infoDataList[0].date}</span></li>
                <li>City: <span>{props.infoDataList[0].city}</span></li>
                <li>Education: <span>{props.infoDataList[0].education}</span></li>
                <li>Web Site: <span><a href={props.infoDataList[0].website} target="_blank">{props.infoDataList[0].website}</a></span>
                </li>
            </ul>
        </div>
    )
}

export default ProfileList;