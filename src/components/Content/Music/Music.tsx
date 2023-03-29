import React from "react";
import s from './Music.module.scss';
import MainTitle from "../../Elements/Titles/MainTitle";

const Music = () => {
    return (
        <div className={s.wrapper}>
            <MainTitle title="Music"/>
        </div>
    )
}

export default Music;