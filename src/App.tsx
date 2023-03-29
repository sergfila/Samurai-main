import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const App = (props: any) => {

    return (
        <div className="app-wrapper">
            <Header />
            <div className="content-wrapper">
                <Sidebar sidebar={props.state.sidebar} />
                <Content state={props.state} />
            </div>
        </div>
    );
}

export default App;