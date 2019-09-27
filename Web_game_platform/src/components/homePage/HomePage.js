import React, { Component } from 'react';
import Header from '../header/headerContainer';
import Advantages from '../advantages/advantagesContainer';
import AvailableGames from '../availableGames/availableGamesContainer';
import Games from '../games/gamesContainer';
import Raffles from '../raffles/rafflesContainer';
/*import '../../style/homePage.css';
import '../../style/header.css';
import '../../style/advantages.css';
import '../../style/availableGames.css';
import '../../style/games.css';
import '../../style/raffles.css';*/

export class HomePage extends Component {
  render() {
    return (
      <div className="home-page-wrapper">
        <Header />
        <Advantages />
        <div className="main">
          <div className="title">
            <h1>Available games</h1>
            <h1>Weekly raffle</h1>
          </div>
          <div className="wrapper">
            <AvailableGames />
            <Games />
            <Raffles />
          </div>
        </div>
      </div>
    )
  }
};


