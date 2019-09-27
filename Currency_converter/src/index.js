import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {WebPage} from './Components/WebPage';
import AllReducers from './reducers/index';
import './style/webPage.css';
import './style/CurrentExchangeRate.css';
import './style/spa.css';
import './style/currencyConverter.css';
import './style/header.css';

const store = createStore(AllReducers);

ReactDOM.render(
    <Provider store = {store}>
        <WebPage/>
    </Provider>, 
    document.getElementById('root')
);


