import React, {Component} from 'react';


export class CurrentExchangeRate extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            userCurrency: [],
            result: []
        };
    }
   
    combainArray(arr1, arr2){
        let combainArray = []
            for(let i = 1; i < arr1.length; i++){
                for(let j = 0; j < arr2.length; j++){
                    if(arr1[i].currency === arr2[j].code){
                        arr1[i].name = arr2[j].name;
                        arr1[i].img = arr2[j].img;
                        combainArray.push(arr1[i]);
                    };
                };
            };
        return combainArray
    }

    selectCurrency(currency, arr){
        this.setState({
            userCurrency: [...this.state.userCurrency, currency],
            result: (this.state.result.length > 0 ? this.state.result : arr).filter(obj => obj.currency !== currency.currency)
        })
    }
    
    render(){
        let exchangeRate = (this.props.exchangeRate) ? this.props.exchangeRate.exchangeRate.exchangeRate : [];
        let currency = (this.props.currency) ? this.props.currency : [];
        let numberOfOrder = 1;
        let newArray = this.combainArray(exchangeRate, currency);
        let selectArray = this.state.result.length > 0 ? this.state.result : newArray;
        
        return(
            <div className='exchange-rate-body'>
                <table className="exchange-rate-table">
                    <caption><h1>Currency rates in Ukraine</h1></caption>
                    <thead className="table-header">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ghfgjh</th>
                        <th scope='col'>Currency name</th>
                        <th scope="col">Code</th>
                        <th scope="col">Purchase of the NBU</th>
                        <th scope="col">Sale of the NBU</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userCurrency.map((currency, index) =>{
                                return (
                                <tr className="selected-сurrencies" key={index}>
                                    <th scope="row">{numberOfOrder++}</th>
                                    <td><img src={require('../../style/img/flags-mini/'+currency.img)} alt=''/></td>
                                    <td>{currency.name}</td>
                                    <td>{currency.currency}</td>
                                    <td>{currency.saleRateNB.toFixed(3)}</td>
                                    <td>{currency.purchaseRateNB.toFixed(3)}</td>
                                </tr>
                                )
                            })
                        }
                        {
                            selectArray.map((currency, index) =>{
                                /* if(index === 0){
                                    return;
                                } */
                                return (
                                <tr className="strings" key={index}>
                                    <th scope="row">{numberOfOrder++}</th>
                                    <td><img src={require('../../style/img/flags-mini/'+currency.img)} alt=''/></td>
                                    <td>{currency.name}</td>
                                    <td>{currency.currency}</td>
                                    <td>{currency.saleRateNB.toFixed(3)}</td>
                                    <td>{currency.purchaseRateNB.toFixed(3)}</td>
                                    <td><img src={require('../../style/img/addIcon.png')} className="addIcon" alt="add to favorites" onClick={()=>this.selectCurrency(currency, newArray)}></img></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    };
};