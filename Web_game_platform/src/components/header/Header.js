import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className="header header-border">
          <div className="left-side">
            <img src={require('../../style/img/logo-oxo.png')} className="logo-oxo" alt="logo-oxo"/>
            <img src={require('../../style/img/HOME.png')} className="home-link" alt="home-link"/>
          </div>
          <div className="right-side">
            <h3><span>We</span> accept: </h3>
            <img src={require('../../style/img/logo-tron.png')} className="logo-tron" alt="logo-tron"/>
            <img src={require('../../style/img/logo-ethereum.png')} className="logo-ethereum" alt="logo-ethereum"/>
          </div>
      </div>
    )
  }
};


