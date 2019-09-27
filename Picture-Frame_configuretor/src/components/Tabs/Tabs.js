import React, { Component } from 'react';

export class Tabs extends Component{
    render(){
        var tabName = ['1 Изображение', '2 Рама', '3 Заголовок', '4 Цвет Отпечатков'];
        return(
            <div className='tabs-wrapper '>
                {
                    tabName.map((name, index)=>{
                        let className = '';
                            if(this.props.orderDesigner.step === index){
                                className = 'select'
                            }
                            return(
                                <span className={className} key={index}>{name}</span>
                            )
                    })
                }
            </div>
        );
    };
} ;