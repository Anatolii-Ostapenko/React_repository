import React from 'react';

export class СurrencyСonverter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            currencyOne: 'EUR',
            currencyTwo: 'USD',
            selectedSum: '',
            result: '',
        }
    }
    converterCurrency=(event)=>{
        let exchangeRateOne = null;
        let exchangeRateTwo = null;
        let result;
        for(let item of this.props.exchangeRate){
            if(item.currency === this.state.currencyOne){
                exchangeRateOne = item.buy
            }
            if(item.currency === this.state.currencyTwo){
                exchangeRateTwo = item.sale
            }
        } 

        if(this.state.currencyOne === this.state.currencyTwo){
            result = event;
        }
        else{
            if(this.state.currencyTwo === 'UAH'){
                result = (event * exchangeRateOne).toFixed(2);
            }else{
                result = ((event * exchangeRateOne)/exchangeRateTwo).toFixed(2);
            }
        }
        this.setState({result: result})
    }
    changeСurrency=(e)=>{
        this.setState({currencyOne: e.target.value, selectedSum: '', result: ''});
    }
    reversConverter=()=>{
        this.setState({currencyOne: this.state.currencyTwo, currencyTwo: this.state.currencyOne, selectedSum: this.state.result, result: this.state.selectedSum})
    }
    componentDidUpdate(prevProps){
        if(this.props.exchangeRate !== prevProps.exchangeRate) {
            this.converterCurrency(this.state.selectedSum);
        }
    }
    render(){
        return(
            <div className='currency-converter'>
                <aside className='left-block'>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(e)=>{this.setState({currencyOne: e.target.value, selectedSum: '', result: ''})}}>
                        {
                            this.props.exchangeRate.map((item, index)=>{
                                if(item.currency === this.state.currencyOne){
                                    return (<option selected value={item.currency} key={index}>{item.currency}</option>)
                                }
                                return (<option value={item.currency} key={index}>{item.currency}</option>)
                            })
                        }
                    </select>
                    <input type="text" className="form-control"  placeholder='0' value = {this.state.selectedSum} aria-describedby="basic-addon1" onChange={(e)=>{this.converterCurrency(e.target.value); this.setState({selectedSum: e.target.value})}}/>
                </aside>
                <i className="fa fa-retweet" aria-hidden="true" onClick={()=>this.reversConverter()}></i>
                <aside className='right-block'>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(e)=>{this.setState({currencyTwo: e.target.value, selectedSum: '', result: ''})}}>
                        {
                            this.props.exchangeRate.map((item, index)=>{
                                if(item.currency === this.state.currencyTwo){
                                    return (<option selected value={item.currency} key={index}>{item.currency}</option>)
                                }
                                return (<option value={item.currency} key={index}>{item.currency}</option>)
                            })
                        }
                    </select>
                    <input type="text" className="form-control"  placeholder='0' value = {this.state.result} aria-describedby="basic-addon1"/>
                </aside>
            </div>
        )
    };
};