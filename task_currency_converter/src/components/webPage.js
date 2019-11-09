import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderExchangeRate from './HeaderExchangeRate/headerExchangeRateContainer';
import ExchangeRate from './ExchangeRate/exchangeRateContainer';
import СurrencyСonverter from './СurrencyСonverter/сurrencyСonverterContainer';
import '../style/wrapper.css';
import '../style/header-exchange-rate.css';
import '../style/exchange-rate.css';
import '../style/currency-converter.css';

export const WebPage = () =>(
    <div className='wrapper'>
        <BrowserRouter>
        <HeaderExchangeRate/>
            <Switch>
                <Route path="/" component={ExchangeRate} exact/>
                <Route path="/сurrency-converter" component={СurrencyСonverter} />
            </Switch>      
        </BrowserRouter>
    </div>
);