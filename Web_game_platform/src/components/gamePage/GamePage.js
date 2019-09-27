import React, { Component } from 'react';
import Header from '../header/headerContainer';
import WindowGame from '../windowGame/windowGameContainer';
import UserPromotion from '../userPromotion/userPromotionContainer';
import OpenGamesList from '../openGamesList/openGamesListContainer';
import LastWinnersList from '../lastWinnersList/lastWinnersListContainer';
import WeeklyPrize from '../weeklyPrize/weeklyPrizeContainer';

export class GamePage extends Component {
  render() {
    return (
      <div className="game-page">
        <Header />
        <div className="wrapper">
          <div className="left-side">
            <WindowGame/>
            <UserPromotion/>
          </div>
          <div className="right-side">
            <OpenGamesList/>
            <div className="weekly-lottery">
              <WeeklyPrize/>
              <LastWinnersList/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
};


