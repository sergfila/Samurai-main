import React from "react";
import s from "./Friends.module.scss";
import MainTitle from "../../Elements/Titles/MainTitle";

const Friends = () => {
    return (
        <div className={s.wrapper}>
            <MainTitle title="Friends"/>
        </div>
    )
}

export default Friends;