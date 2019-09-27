import React, { Component } from 'react';

export class AvailableGames extends Component {
  render() {
    return (
      <div className="available-games">
        
        <div className="window">
          <div className="header-window">
            <p><span>Now playing</span><span>15</span></p>
            <p><span>Avaliable bet:</span><span>4</span></p>
          </div>
          <div className="cross-and-slider"></div>
          <p className="game-name">Tic-Tac-Toe</p>
        </div>
      </div>
    )
  }
};


