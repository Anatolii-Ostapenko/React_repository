import React, { Component } from 'react';

export class OpenGamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightElement: ''
    }
  };

  render() {
    let gameList = this.props.openGameList.list ? this.props.openGameList.list : [];
    let leftSideAddClassName = '';
    let rightSideAddClassName = '';
    let trnOrEtn = '';
   
    return (
      <div className="open-games-list">
        <div className="list-title">
          <img src={require('../../style/img/db.png')} alt="data base"/>
          <p>List of open games:</p>
        </div>
        
        <div className="scroll-bar-retreat">
        
        <div className="wrapper-list">
        <div className="sorting"></div>
          <div className="list" onMouseLeave={()=>{this.setState({highlightElement: ''})}} >
            {
              gameList.map((game, index) => {
                if(index === this.state.highlightElement){
                  rightSideAddClassName = 'highlight';
                  leftSideAddClassName = 'left-side-width'
                }else{
                  rightSideAddClassName = '';
                  leftSideAddClassName = ''
                }
                trnOrEtn = game.name === 'ETH' ? 'ethereum-small.png' : 'tron-small.png';
                return (
                  <div className='list-item' key={index}>
                    <div className={"list-item-left-side"+" "+ leftSideAddClassName}>
                      <div className="creator">
                        <img className="wallet" src={require('../../style/img/wallet.png')} alt="wallet"/>
                        <p className="name">Creator:</p>
                        <div className="value">{game.creator}</div>
                      </div>
                      <div className="bet">
                        <svg  className="chart"width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.50928 7.73972H0.727489C0.325787 7.73972 0 8.09921 0 8.54246V17.37C0 17.8129 0.325787 18.1724 0.727489 18.1724H2.50928C2.91098 18.1724 3.23643 17.8129 3.23643 17.37V8.54246C3.23643 8.09921 2.91098 7.73972 2.50928 7.73972Z" fill="#828282"/>
                          <path d="M6.76367 10.1468H4.98188C4.57984 10.1468 4.25439 10.5063 4.25439 10.9496V17.3693C4.25439 17.8129 4.57984 18.172 4.98188 18.172H6.76367C7.16537 18.172 7.49082 17.8125 7.49082 17.3693V10.9496C7.49082 10.5063 7.16537 10.1468 6.76367 10.1468Z" fill="#828282"/>
                          <path d="M11.0177 10.1468H9.23594C8.83424 10.1468 8.50879 10.5063 8.50879 10.9496V17.3693C8.50879 17.8129 8.83424 18.172 9.23594 18.172H11.0177C11.4198 18.172 11.7452 17.8125 11.7452 17.3693V10.9496C11.7452 10.5063 11.4198 10.1468 11.0177 10.1468Z" fill="#828282"/>
                          <path d="M15.2726 7.73972H13.4908C13.0891 7.73972 12.7637 8.09921 12.7637 8.54246V17.37C12.7637 17.8133 13.0891 18.1724 13.4908 18.1724H15.2726C15.6743 18.1724 16.0001 17.8126 16.0001 17.37V8.54246C16.0001 8.09921 15.6743 7.73972 15.2726 7.73972Z" fill="#828282"/>
                          <path d="M8.21191 5.35175V6.79646C8.60817 6.76754 9.02587 6.56244 9.02587 6.08124C9.02587 5.58464 8.568 5.43927 8.21191 5.35175Z" fill="#828282"/>
                          <path d="M7.07324 3.62268C7.07324 3.9878 7.31937 4.19891 7.81537 4.3086V3.00174C7.36465 3.01639 7.07324 3.30864 7.07324 3.62268Z" fill="#828282"/>
                          <path d="M8 0.517242C5.79438 0.517242 4 2.49763 4 4.93104C4 7.36369 5.79438 9.34408 8 9.34408C10.2056 9.34408 12 7.36369 12 4.93104C12 2.49763 10.2056 0.517242 8 0.517242ZM8.21208 7.54137V7.99327C8.21208 8.11761 8.12562 8.24157 8.0126 8.24157C7.90094 8.24157 7.81549 8.11761 7.81549 7.99327V7.54137C6.69787 7.51132 6.14196 6.77431 6.14196 6.1977C6.14196 5.90658 6.30162 5.73829 6.55149 5.73829C7.29226 5.73829 6.71626 6.74539 7.81549 6.7961V5.27099C6.83506 5.07453 6.24136 4.6001 6.24136 3.79021C6.24136 2.79814 6.98894 2.28652 7.81549 2.25797V1.8688C7.81549 1.74446 7.90094 1.6205 8.0126 1.6205C8.12562 1.6205 8.21208 1.74446 8.21208 1.8688V2.25797C8.72749 2.27299 9.78587 2.62985 9.78587 3.34545C9.78587 3.62981 9.59319 3.79735 9.36817 3.79735C8.93787 3.79735 8.944 3.01714 8.21208 3.00211V4.38861C9.08494 4.59333 9.85804 4.87769 9.85804 6.00162C9.85804 6.97904 9.19694 7.47488 8.21208 7.54137Z" fill="#828282"/>
                        </svg>
                        <p className="name">Bet:</p>
                        <div className="value">{game.bet}</div>
                        <img className="icon-tehnologi" src={require('../../style/img/'+trnOrEtn+'')} alt="crypto currency"/>
                        <p>{game.name}</p>
                        <div className="button-last-activity" onMouseOver={()=>{this.setState({highlightElement: index})}}>4 hour ago</div>
                      </div>
                    </div>
                    <div className={"list-item-right-side" + " " + rightSideAddClassName}>
                      <div className="button">
                        <img src={require('../../style/img/play.png')} alt="play icon"/>
                        <p>Join</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        </div>
        
        

      </div>
    )
  }
};


