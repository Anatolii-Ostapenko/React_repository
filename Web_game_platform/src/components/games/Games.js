import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Games extends Component {
  render() {
    let gamesList = [
      {name: 'Long game name if this', imgUrl: require('../../style/img/game1.png')},
      {name: 'Long game name if this', imgUrl: require('../../style/img/joystick.png')},
      {name: 'Long game name if this', imgUrl: require('../../style/img/joystick.png')}
    ];
    return (
      <div className="games">
        {
          gamesList.map((game, index)=>{
            return(
              <div className="game-item">
                <Link to="/game-page">
                  <img src={game.imgUrl} alt={game.name}/>
                  <p>{game.name}</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
};


