import React, { Component } from 'react';

export class LastWinnersList extends Component {
  render() {
    return (
      <div className="last-winners-list test">
        <div className="stamp">
          <img src={require('../../style/img/stamp.png')} alt="stamp"/>
          <p>Last Winners:</p>
        </div>
        {
          this.props.winnersList.map((winner)=>{
            return(
              <div className="winner">
                <p>{winner.creator}</p>
                <div className="wrapp-bottom-line"> 
                  <div>
                    <p>{winner.rate}</p>
                    <p>{winner.cryptoСurrency}</p>
                  </div>
                  <p>{winner.date}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
};


