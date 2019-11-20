import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AllReducers from './reducers/index';
import {App} from './components/App';

const store = createStore(AllReducers);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
