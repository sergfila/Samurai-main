import React from "react";
import s from './Content.module.scss';
import Profile from "./Profile/Profile";
import Music from "./Music/Music";
import News from "./News/News";
import {Route} from "react-router-dom";
import Settings from "./Settings/Settings";
import Friends from "./Friends/Friends";
import {ActionsTypes, StateGlobalType} from "../../redux/store";
import DialogsContainer from "./Dialogs/DialogsContainer";

type ContentStateType = {
    contentState: StateGlobalType
    dispatch: (action: ActionsTypes) => void
}

const Content = ({contentState, dispatch}: ContentStateType) => {
    return (
        <div className={s.wrapper}>
            <Route path={'/'} exact
                   render={ () => <Profile profilePage={contentState.profilePage}
                                           dispatch={dispatch}
                   />}/>
            <Route path={'/profile'}
                render={ () => <Profile profilePage={contentState.profilePage}
                                        dispatch={dispatch}
                />}/>
            <Route path={'/dialogs'} render={ () => <DialogsContainer />}/>
            <Route path={'/music'} render={ () => <Music />}/>
            <Route path={'/news'} render={ () => <News />}/>
            <Route path={'/settings'} render={ () => <Settings />}/>
            <Route path={'/friends'} render={ () => <Friends />}/>
        </div>
    )
}

export default Content;