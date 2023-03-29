import s from "./MainTitle.module.scss";
import React from "react";

type MainTitlePropsType = {
    title: string;
}

const MainTitle = (props: MainTitlePropsType) => {
    return (
        <div className={s.title}>
            {props.title}
        </div>
    )
}

export default MainTitle;