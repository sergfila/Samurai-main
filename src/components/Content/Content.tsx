import React from "react";
import s from './Content.module.scss';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import {Route} from "react-router-dom";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";


const Content = (props: any) => {

    return (
        <div className={s.wrapper}>
            <Route path={'/profile'} render={ () => <Profile profilePage={props.state.profilePage} />}/>
            <Route path={'/dialogs'} render={ () => <Dialogs messagesPage={props.state.messagesPage} />}/>
            <Route path={'/music'} render={ () => <Music />}/>
            <Route path={'/news'} render={ () => <News />}/>
            <Route path={'/settings'} render={ () => <Settings />}/>
            <Route path={'/friends'} render={ () => <Friends />}/>
        </div>
    )
}

export default Content;