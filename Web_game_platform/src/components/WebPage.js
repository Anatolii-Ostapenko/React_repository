import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './homePage/homePageContainer';
import GamePage from './gamePage/gamePageContainer';
import '../style/homePage.css';
import '../style/header.css';
import '../style/advantages.css';
import '../style/availableGames.css';
import '../style/games.css';
import '../style/raffles.css';
import '../style/totalWon.css';
import '../style/weeklyPrize.css';
import '../style/game-page.css';
import '../style/windowGame.css';
import '../style/userPromotion.css';
import '../style/openGamesList.css';
import '../style/lastWinnersList.css';

export class WebPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/game-page" component={GamePage} />
        </Switch>      
      </BrowserRouter>
    );
  }
}

