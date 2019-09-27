import React, { Component } from 'react';

export class Fingerprints extends Component{
    
    render(){
        var setFingerPrints = '';
        var setFingersId = [];
        var counter = 0;
        let className = '';
        if(this.props.finaleOrder && this.props.finaleOrder.setFingerPrints){
            setFingerPrints = this.props.finaleOrder.setFingerPrints;
            for(var i=0; i < setFingerPrints.length; i++){
                setFingersId.push(setFingerPrints[i].id)
            }
            
        }
      
        return(
            <div className='wrapper fingerPrints'>
                <h5>Цвет отпечатков</h5>
                <p>Наконец, подберите самые подходящие цвета красок, с помощью которых ви и оставите на картине свой след на память!</p>
                <h5>Обратите внимание: более 2-х цветов увеличат стоимость</h5>
                <div className='img-container fingerPrints-container'>
                    {
                        this.props.fingerPrints.map((finger, index) => {
                            className = 'img-fingerPrints img-style';
                            
                            if(setFingersId.length != counter){
                                if(setFingersId[counter] === index){
                                    className = 'img-fingerPrints img-style highlight';
                                    counter++;
                                }
                            }
                                
                            return (                         
                                <img src={require('../../style/marks/' + finger.url)} className={className} key={index} alt={finger.name} onClick={()=>{this.props.setFingerPrints(finger)}}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
} ;