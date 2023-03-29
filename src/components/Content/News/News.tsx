import React from "react";
import s from './News.module.scss';
import MainTitle from "../../Elements/Titles/MainTitle";

const News = () => {
    return (
        <div className={s.wrapper}>
            <MainTitle title="News"/>
        </div>
    )
}

export default News;