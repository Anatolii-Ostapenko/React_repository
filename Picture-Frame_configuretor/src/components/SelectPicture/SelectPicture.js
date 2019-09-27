import React, { Component } from 'react';

export class SelectPicture extends Component{

    render(){
        let selectedItemIndex = '';
        let className = '';
        if(this.props.finaleOrder){
            selectedItemIndex = this.props.finaleOrder.selectedPicture.id;
        }
        return(
            <div className='wrapper'>
                <h5>Выберите изображения</h5>
                <p>Для начала выберите основу, саму картину, на которую вы и гости вашего праздника будете наносить отпечатки пальцев с пожеланиями</p>
                <div className='img-container'>
                    {
                        this.props.images.map((img, index) => {
                            if(selectedItemIndex === index){
                                className = 'img-style highlight'
                            }
                            else className = 'img-style'
                            return (                         
                                    <img src={require('../../style/img/pics/' + img.url)} className={className}  key={index} alt={img.name} onClick={()=>{this.props.selectPicture(img)}}/>
                                )
                        })
                    }
                   
                </div>
            </div>
        )
    }
} ;