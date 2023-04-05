import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import {StateType} from "./redux/state";

type GlobalStateType = {
    globalState: StateType
}

const App = (props: GlobalStateType) => {

    return (
        <div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Sidebar globalSidebar={props.globalState.sidebar} />
                <Content contentState={props.globalState} />
            </div>
        </div>
    );
}

export default App;