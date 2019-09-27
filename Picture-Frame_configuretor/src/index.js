import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import {AllComponent} from './components/index';
import AllReducers from './reducers/index';
import * as serviceWorker from './serviceWorker';
import './style/order-designer.css';
import './style/tabs.css';
import './style/selected-result.css';
import './style/selected-img.css';
import './style/sum.css';
import './style/title.css';
import './style/fingerPrint.css';

const store = createStore(AllReducers);

ReactDOM.render(
    <Provider store = {store}>
        <AllComponent/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
