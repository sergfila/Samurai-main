import React from "react";
import s from './Content.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import {Route} from "react-router-dom";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";
import {StateType} from "../../redux/state";

type ContentStateType = {
    contentState: StateType
}

const Content = (props: ContentStateType) => {
    return (
        <div className={s.wrapper}>
            <Route path={'/profile'} render={ () => <Profile profilePageState={props.contentState.profilePage} />}/>
            <Route path={'/dialogs'} render={ () => <Dialogs messagesPageState={props.contentState.messagesPage} />}/>
            <Route path={'/music'} render={ () => <Music />}/>
            <Route path={'/news'} render={ () => <News />}/>
            <Route path={'/settings'} render={ () => <Settings />}/>
            <Route path={'/friends'} render={ () => <Friends />}/>
        </div>
    )
}

export default Content;