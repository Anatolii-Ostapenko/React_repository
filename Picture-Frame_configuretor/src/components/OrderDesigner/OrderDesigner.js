import React, { Component } from 'react';
import Tabs from'../Tabs/tabsContainer';
import SelectedResult from '../SelectedResult/selectedResultContainer';
import SelectPicture from '../SelectPicture/selectPictureContainer';
import SelectFrame from '../SelectFrame/selectFrameContainer';
import Title from '../Title/titleContainer';
import Fingerprints from '../Fingerprints/fingerprintsContainer';
import Sum from '../Sum/sumContainer';

/*let promise = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('test')
    }, 5000);
    setTimeout(()=>{
        rej('error 404')
    }, 7000)
});*/


    

export class OrderDesigner extends Component{
    constructor(props){
        super(props);
             
    }
    componentDidMount(){
        
       /*promise
            .then(
                (value)=>{this.setState({val: value})
            
            })
            .catch(
                (err)=>{
                    alert(err)
                }
            )*/
            this.props.loadData()
                
    }


    getCurentView(){
        var step = this.props.orderDesigner.step;
            switch (step) {
                case 0:
                    return <SelectPicture/>
                break;
                case 1:
                    return  <SelectFrame/>
                break;
                case 2:
                    return  <Title/>
                case 3:
                    return  <Fingerprints/>
                break;
            }
    };
   
    
    render(){
       var arr = this.props.userArr || [];
        return(
            <div className='order-designer-wrapper row'>
                <div className='container col-md-8'>
                
                    <ul>
                        {
                            arr.map((person, index)=>{
                                return <li key={index}>{person.name}</li>
                            })
                        }
                    </ul>
                    <Tabs/>
                    {this.getCurentView()}
                    <Sum/>
                </div>
                <SelectedResult/>

                І
            </div>
        )
    }
};
