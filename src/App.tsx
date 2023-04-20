import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import {addChatMessage, StateGlobalType} from "./redux/state";
import {addPost} from './redux/state';


type StateType = {
    state: StateGlobalType
}

const App = (props: StateType) => {

    return (
        <div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Sidebar
                    sidebar={props.state.sidebar}
                />
                <Content
                    contentState={props.state}
                    addPost={addPost}
                    addChatMessage={addChatMessage}
                />
            </div>
        </div>
    );
}

export default App;