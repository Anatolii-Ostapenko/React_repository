import React, { Component } from 'react';

export class TotalWon extends Component {
  render() {
    return (
        <div className="total-won">
          <div className="total-left-side">
            <p>Total won:</p>
          </div>
          <div className="total-right-side">
            <p>ETH: <span>350.309753232</span></p>
            <p>TRX: <span>450.309753232</span></p>
          </div>
        </div>
    )
  }
};


