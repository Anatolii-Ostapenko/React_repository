import React from 'react';

export class ExchangeRate extends React.Component {
  render(){
    return(
      <div className='exchange-rate'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Сurrency</th>
              <th scope="col">Buy</th>
              <th scope="col">Sale</th>
            </tr>
          </thead>
          <tbody>
              {
                this.props.exchangeRate.map((currency, index)=>{
                  return(
                    <tr key={index}>
                      <td>{currency.currency}</td>
                      <td>{currency.buy}</td>
                      <td>{currency.sale}</td>
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