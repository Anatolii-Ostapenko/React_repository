import React, { Component } from 'react';

export class Title extends Component{
    render(){
       let tileOfPicture = '' ;
       let signature = '';
       let date = '';
       
        if(!this.props.finaleOrder.title){
            tileOfPicture = 'Введите текст';
        };
        if(!this.props.finaleOrder.signature){
            signature = 'Введите текст';
        };
        if(!this.props.finaleOrder.date){
            date = 'Виберите дату';
        };
        return(
            <div className='wrapper'>
                <h5>Заголовок</h5>
                <p>Персонализируйте ваше "Дерево пожеланий"; Вверху и внизу картины есть специальные поля, корорые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или особие пожилания, добавить дату, или логотип компании, если речь идет о корпоративном подарке.</p>
                <div className="input-group ">
                    <input type="text" className="form-control" placeholder="Наша Свадьба" aria-label="wedding" aria-describedby="basic-addon1" onChange={(e)=>{this.props.setTitle(e.target.value)}}/>
                    <label>Заголовок картины</label>
                </div>
                    <div className='validation'>{tileOfPicture}</div> 
                <div className="input-group ">
                    <input type="text" className="form-control" placeholder="Анастасия и Константин" aria-label="Signature" aria-describedby="basic-addon1" onChange={(e)=>{this.props.setSignature(e.target.value)}}/>
                    <label>Подпись</label>
                </div>
                <div className='validation'>{signature}</div>    
                <div className="input-group form-group ">
                    <input type="date" name="bday" min="01-01-1000" max="3000-12-31" className="form-control" placeholder="29 июля 2015" aria-label="date" aria-describedby="basic-addon1" onChange={(e)=>{this.props.setEventDate(e.target.value)}}/>
                    <label> Дата события</label>
                </div>
                <div className='validation'>{date}</div>    
                <h6>Шрифт</h6>
                <button type="button" className="btn btn-outline-success" onClick={()=>{this.props.setFont('Ariston')}}>Ariston</button>
                <button type="button" className="btn btn-outline-success" onClick={()=>{this.props.setFont('Davinci')}}>DaVinci</button>
                <button type="button" className="btn btn-outline-success" onClick={()=>{this.props.setFont('Brody')}}>Brody</button>
            </div>
        );
    };
} ;