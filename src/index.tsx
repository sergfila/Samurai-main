import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store'
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);