import React from 'react';
import {Link} from "react-router-dom";

export class HeaderExchangeRate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedDate: '',
    }
  }
  componentDidMount(){
    this.setState({selectedDate: new Date().toISOString().substring(0, 10)});
    this.downloadData('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  }
  downloadData=(link)=>{
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl + link)
        .then(response => response.json())
        .then(exchangeRate => this.compileDataArray(exchangeRate));
  }
  compileDataArray=(data)=>{
    let array = data.exchangeRate ? data.exchangeRate : data;
    let newArray = [];
    for(let item of array){
      let currency = item.currency ? item.currency : item.ccy;
      let obj = {};
      obj.baseCurrency = item.baseCurrency ? item.baseCurrency : item.base_ccy;
      obj.currency = currency === 'RUR' ? 'RUB' : currency;
      obj.buy = item.purchaseRate ? item.purchaseRate : item.buy;
      obj.sale = item.saleRate ? item.saleRate : item.sale;
      if(obj.buy !== undefined){
        newArray.push(obj)
      }
    }
    newArray.push({baseCurrency: "UAH", currency: "UAH", buy: "1", sale: "1"})
    this.props.putExchangeRateToStore(newArray)
  }
  setDate=(e)=>{    
    let date = new Date(e.target.value).toLocaleDateString();
    if(new Date().toLocaleDateString() !== date){
      this.setState({selectedDate: e.target.value});
      this.downloadData('https://api.privatbank.ua/p24api/exchange_rates?json&date='+date+'');
    }else{
      this.setState({selectedDate: e.target.value});
      this.downloadData('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    }
  }
  render(){
    return(
      <div className='header-exchange-rate'>
        <div className='wrap-header'>
          <h3>Exchange rates of PrivatBank</h3>
          <input type="date" value={this.state.selectedDate} onChange={(e)=>{this.setDate(e)}}/>
        </div>
        <div className="wrap-links">
          <Link to="/">
            Exchange rates
          </Link>
          <Link to="/Сurrency-converter">
            Сurrency converter
          </Link>
        </div>
      </div>
    );
  };
};
