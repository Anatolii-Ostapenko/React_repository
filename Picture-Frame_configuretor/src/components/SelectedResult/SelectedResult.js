import React, { Component } from 'react';

export class SelectedResult extends Component{
    inBasket(){
        
        var price = JSON.stringify(this.props.finaleOrder);
       
    }
    
    render(){
        let finaleOrder = '';
        let step = this.props.orderDesigner.step;
        let renderButton = ''
        let imageContent = '';
        let imageName = '';
        let borderName = '';
        let title = '';
        let signature = '';
        let date = '';
        let backgroundImage = 'none';
        let font = '';
        let disabledButton = true;
        let setFingerPrints = [];
        let notSelectedFingerPrints = '';
        

        if(this.props.finaleOrder){
            finaleOrder = this.props.finaleOrder;

            if(finaleOrder.selectedFrame){  
                borderName = finaleOrder.selectedFrame.name;
                backgroundImage = "url(" + require('../../style/borders/' + finaleOrder.selectedFrame.url) + ")";
            };
            if(finaleOrder.font){
                font = finaleOrder.font
            };

            if(finaleOrder.selectedPicture){
                disabledButton = false;
                if(step === 1 && !finaleOrder.selectedFrame){
                    disabledButton = true;
                };
                if(step === 2 && !finaleOrder.title){
                    disabledButton = true;
                }; 
                if(step === 2 && !finaleOrder.signature){
                    disabledButton = true;
                }; 
                if(step === 2 && !finaleOrder.date){    
                    disabledButton = true;
                }; 
            };
            let style = {backgroundImage};
            if(finaleOrder.selectedPicture){
                imageName = finaleOrder.selectedPicture.name;
                title = finaleOrder.title;
                signature = finaleOrder.signature;
                date = finaleOrder.date;
                imageContent = <div style={style} className="result-container">
                                    <p  style = {{fontFamily: font}} className='fonts-title'>{title}</p>  
                                    <img src={require('../../style/img/pics/' + finaleOrder.selectedPicture.url)}  alt={finaleOrder.selectedPicture.name}/>
                                    <p style = {{fontFamily: font}} className='fonts-signature'>{signature}</p>  
                                    <p style = {{fontFamily: font}} className='fonts-date'>{date}</p>  
                                </div>
            };
        };
        
        if(!finaleOrder.selectedPicture){
            imageName = 'Выберите изображения'
        };
        if(!finaleOrder.selectedFrame){
            borderName = 'Выберите изображения'
        };
        if(finaleOrder.setFingerPrints){
            setFingerPrints = finaleOrder.setFingerPrints
        }
        else{
            notSelectedFingerPrints = <span className='not-selected-finger'>Не выбраны</span>
        };

        if(step < 3){
            renderButton = <button type="button" className="btn btn-success next-step" disabled={disabledButton} onClick={()=>{this.props.nextStep()}}>Далее</button>
        }else{
            renderButton = <button type="button" className="btn btn-success inBasket" disabled={disabledButton} onClick={()=>{this.inBasket()}}>В корзину</button>
        };

        return(
            <div className='selected-result-wrapper col-md-4'>
                <h3>Ваша картина</h3>
                <p>Изображение : <strong>{imageName}</strong></p>
                <p>Рама : <strong>{borderName}</strong></p>
                <p>Отпечатки : {notSelectedFingerPrints}
                   {
                       setFingerPrints.map((finger, index)=>{
                           return(
                            <span clasname='finger-color-box' style={{backgroundColor: finger.color}} key={index}></span>
                           )
                       })
                   }
                </p>
                <div className='window-result'>
                    {imageContent}
                </div>
                {renderButton}
            </div>
        )
       
    }
} ;