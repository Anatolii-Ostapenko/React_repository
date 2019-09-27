import React, { Component } from 'react';

export class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCurrencyCtH: '',
      selectCurrencyHtC: '',
      resultConvertCurrencyToHryvnia: '',
      resultHrivnaToOtherCurrencies: ''
    };
  };
 
  convertCurrencyToHryvnia(number) {
    if (this.state.selectCurrencyCtH === "") {
      this.setState({ resultConvertCurrencyToHryvnia: "Choose a currency" });
    } else {
      this.setState({ resultConvertCurrencyToHryvnia: (1 * this.state.selectCurrencyCtH * number).toFixed(2) });
    }
  };

  hrivnaToOtherCurrencies(number) {
    if (this.state.selectCurrencyHtC === "") {
      this.setState({ resultHrivnaToOtherCurrencies: "Choose a currency" })
    } else {
      this.setState({ resultHrivnaToOtherCurrencies: (1 * number / this.state.selectCurrencyHtC).toFixed(2) })
    }
  };
  componentWillReceiveProps(newProps) {
    let newExchangeRate = newProps.exchangeRate.exchangeRate.exchangeRate;
    const oldProps = this.props
    if(oldProps.mySelectСurrency !== newProps.mySelectСurrency) {
      for(let i = 0; i < newExchangeRate.length; i++){
        if(newExchangeRate[i].currency === newProps.mySelectСurrency.mySelectСurrency){
          this.setState({selectCurrencyCtH: newExchangeRate[i].saleRateNB, selectCurrencyHtC: newExchangeRate[i].saleRateNB})
        }
      }
    }
  };
 

  render() {
    let exchangeRate = this.props.exchangeRate ? this.props.exchangeRate.exchangeRate.exchangeRate : [];
    let mySelectСurrency = this.props.mySelectСurrency ? this.props.mySelectСurrency.mySelectСurrency : '';
    return (
      <div className='converter-body'>
        <h1>Currency converter</h1>
        <h3>Currency converter to hryvnia.</h3>
        <div className='currency-to-hryvnia'>
          <div className='left-side'>
            <select className="form-control" onChange={(e) => {this.setState({ selectCurrencyCtH: e.target.value })}}>
              {
                exchangeRate.map((currency, index) => {
                  if (index === 0) {
                    return <option key={index} disabled selected>Select currensy</option>
                  }
                  if (currency.currency === mySelectСurrency) {
                    return <option key={index} value={currency.saleRateNB} selected>{currency.currency + ' - ' + this.props.currency[index - 1].name}</option>
                  }
                  return (
                    <option key={index} value={currency.saleRateNB}>{currency.currency + ' - ' + this.props.currency[index - 1].name}</option>
                  )
                })
              }
            </select>
            <div className="input-group mb-3">
              <input type="text" className="form-control test" placeholder="Enter amount" onKeyUp={(e) => {
                this.convertCurrencyToHryvnia(e.target.value);
              }} />
            </div>
          </div>
          <i className="fas fa-angle-double-right"></i>
          <div className='right-side'>
            <button type="button" className="btn btn-light" disabled>UAH - Hryvnia</button>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Result" value={this.state.resultConvertCurrencyToHryvnia} />
            </div>
          </div>
        </div>

        <h3>Hryvnia converter to other currencies.</h3>
        <div className='hryvnia-to-other-currencies'>
          <div className='left-side'>
            <button type="button" className="btn btn-light" disabled>UAH - Hryvnia</button>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter amount" onKeyUp={(e) => {
                this.hrivnaToOtherCurrencies(e.target.value)
              }} />
            </div>
          </div>
          <i class="fas fa-angle-double-right"></i>
          <div className='right-side'>
            <select className="form-control" onChange={(e) => this.setState({selectCurrencyHtC: e.target.value })}>
              {
                exchangeRate.map((currency, index) => {
                  if (index === 0) {
                    return <option key={index} disabled selected>Select currensy</option>
                  } 
                  if (currency.currency === mySelectСurrency) {
                    return <option key={index} value={currency.saleRateNB} selected>{currency.currency + ' - ' + this.props.currency[index - 1].name}</option>
                  }
                  return (
                    <option key={index} value={currency.saleRateNB}>{currency.currency + ' - ' + this.props.currency[index - 1].name}</option>
                  )
                })
              }
            </select>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Result" value={this.state.resultHrivnaToOtherCurrencies} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

