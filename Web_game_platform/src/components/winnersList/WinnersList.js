import React, { Component } from 'react';

export class WinnersList extends Component {
  render() {
    return (
      <div className="winners-list">
        <div className="winners-list-title">
          <div className="title-left-side">
            <p>TIC-TAC-TOE</p>
            <p>In this week at stake:</p>
          </div>
          <div className="title-right-side">
            <p>ETH: <span>250.309753232</span></p>
            <p>TRX: <span>250.309753232</span></p>
          </div>
        </div>
        <div className="stamp">
          <img src={require('../../style/img/stamp.png')} alt="stamp"/>
          <p>Last Winners:</p>
        </div>
        <div className="last-winers">
          <div className="item-winers">
            <p>0xF0CEe1E2C47744ad880547306a45332aDdAb8D54</p>
            <div className="wrapp-bottom-line"> 
              <div>
                <p>0.04250</p>
                <p>ETH</p>
              </div>
              <p>30.12.19</p>
            </div>
          </div>
          <div className="item-winers">
            <p>0xF0CEe1E2C47744ad880547306a45332aDdAb8D54</p>
            <div className="wrapp-bottom-line"> 
              <div>
                <p>0.04250</p>
                <p>ETH</p>
              </div>
              <p>30.12.19</p>
            </div>
          </div>
          <div className="item-winers">
            <p>0xF0CEe1E2C47744ad880547306a45332aDdAb8D54</p>
            <div className="wrapp-bottom-line"> 
              <div>
                <p>0.04250</p>
                <p>ETH</p>
              </div>
              <p>30.12.19</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


