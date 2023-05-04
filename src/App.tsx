import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import {ActionsTypes, StateGlobalType, StoreType} from "./redux/state";


type StateType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: StateType) => {

    const state: StateGlobalType = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Sidebar
                    sidebar={state.sidebar}
                />
                <Content
                    contentState={state}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}

export default App;