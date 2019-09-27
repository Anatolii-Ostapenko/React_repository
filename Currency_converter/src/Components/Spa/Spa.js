import React, {Component} from 'react';
import CurrentExchangeRate from '../CurrentExchangeRate/currentExchangeRateContainer';
import Header from '../Header/headerContainer';
import CurrencyConverter from '../CurrencyConverter/currencyConverterContainer';

export class Spa extends Component{
   constructor(props){
    super(props);
    //let date = new Date().toLocaleDateString();
    let date = '05.03.2019';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.privatbank.ua/p24api/exchange_rates?json&date="+date+"";
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => this.props.gettingExchangeRate(data));
    } 

    getCurentView(){
        var step = this.props.setPage ? this.props.setPage.setPage : 0;
            switch (step) {
                case 0: return <CurrencyConverter/>
                case 1: return <CurrentExchangeRate/>
                default: return 0
            }
    };
    render(){
        return(
            <div className='spa-body' >
                <Header/>    
                {this.getCurentView()}
            </div>
        );
    };
};