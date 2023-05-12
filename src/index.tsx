import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store'
import {StateGlobalType} from "./redux/store";
import { StoreContext } from './Store.Context';

export const rerenderEntireTree = (state: StateGlobalType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provaider value={store}>
                <App />
                {/*<App store={store}*/}
                {/*     dispatch={store.dispatch.bind(store)}*/}
                {/*/>*/}
            </StoreContext.Provaider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})