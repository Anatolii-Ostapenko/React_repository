import React, { Component } from 'react';

export class Advantages extends Component {
  render() {
    return (
      <div className="advantages">
        <h1 className="title">Our advantages</h1>
        <div className="statistics">
              <div>
                  <h3>80%</h3>
                  <p>of game prize goes to winner</p>
              </div>
              <div>
                  <h3>5%</h3>
                  <p>of game prize goes to player's referral address</p>
              </div>
              <div>
                  <h3>5%</h3>
                  <p>of game prize goes to weekly raffle (addresses played during past week)</p>
              </div>
              <div>
                  <h3>1%</h3>
                  <p>of raffle prize goes to raffle trigger address</p>
              </div>
              <div>
                  <h3><span>Only </span>10%</h3>
                  <p>of game prize goes to developers (other games charge 20%)</p>
              </div>
          </div>
      </div>
    )
  }
};


