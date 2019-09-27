import React, { Component } from 'react';

export class WeeklyPrize extends Component {
  render() {
    return (
        <div className="weekly-prize test2">
          <div className="prize-left-side">
            <p>TIC-TAC-TOE</p>
            <p>In this week at stake:</p>
          </div>
          <div className="prize-right-side">
            <p>ETH: <span>250.309753232</span></p>
            <p>TRX: <span>250.309753232</span></p>
          </div>
        </div>
    )
  }
};


