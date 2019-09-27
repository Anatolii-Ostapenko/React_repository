import React, { Component } from 'react';

export class Sum extends Component{
    
    render(){
        let finaleOrder = this.props.finaleOrder;
        let result = 0;

        if(finaleOrder && finaleOrder.selectedPicture){
            result = finaleOrder.selectedPicture.price
            if(finaleOrder && finaleOrder.selectedFrame){
                result = result + finaleOrder.selectedFrame.price
            }
        };
        return(
            <div className='sum-wrapper '>
                <h5>Стоимость: <strong>{result}</strong><span>грн</span></h5>
            </div>
        )
    }
} ;