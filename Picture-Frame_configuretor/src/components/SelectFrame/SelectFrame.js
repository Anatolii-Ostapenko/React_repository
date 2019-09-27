import React, { Component } from 'react';

export class SelectFrame extends Component{
    render(){
        let selectedItemIndex = '';
        let className = '';
        if(this.props.finaleOrder && this.props.finaleOrder.selectedFrame){
            selectedItemIndex = this.props.finaleOrder.selectedFrame.id;
        }
       
        return(
            <div className='wrapper'>
                <h5>Рама</h5>
                <p>Подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же не просто оставляете "пальчики", а создаете предмет декора для дома и офиса:</p>
                <div className='img-container'>
                    {
                        this.props.frames.map((frame, index) => {
                            if(selectedItemIndex === index){
                                className = 'img-style highlight'
                            }
                            else className = 'img-style'
                            return (                         
                                <img src={require('../../style/borders/' + frame.url)} className={className} key={index} alt={frame.name} onClick={()=>{this.props.selectFrame(frame)}}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
} ;