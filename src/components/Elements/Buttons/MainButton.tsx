import React from "react";
import s from "./Buttons.module.scss";

const MainButton = () => {
    return (
        <button className={`${s.buttons__main} ${s.buttons}`}>Send</button>
    )
}

export default MainButton;