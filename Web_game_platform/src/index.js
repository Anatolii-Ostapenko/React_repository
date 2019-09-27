import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {WebPage} from './components/WebPage';
import AllReducers from './reducers/index';


const store = createStore(AllReducers)

ReactDOM.render(
    <Provider store={store}>
        <WebPage />
    </Provider>, 
document.getElementById('root'));

