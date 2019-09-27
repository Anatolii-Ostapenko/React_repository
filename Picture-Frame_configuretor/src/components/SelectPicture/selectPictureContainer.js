import {connect} from 'react-redux';
import {SelectPicture} from './SelectPicture';
import {bindActionCreators} from 'redux';
import {selectPicture} from '../../action/index'

const  mapStateToProps = (state)=>{
    return {
        images: [
            {
                id: 0,
                url: '01.jpg',
                name: 'Картинка №1',
                price: 1000
            },
            {
                id: 1,
                url: '02.jpg',
                name: 'Картинка №2',
                price: 550
            },
            {
                id: 2,
                url: '03.jpg',
                name: 'Картинка №3',
                price: 400
            },
            {
                id: 3,
                url: '04.jpg',
                name: 'Картинка №4',
                price: 420
            },
            {
                id: 4,
                url: '05.jpg',
                name: 'Картинка №5',
                price: 300
            },
            {
                id: 5,
                url: '06.jpg',
                name: 'Картинка №6',
                price: 700
            },
            {
                id: 6,
                url: '07.jpg',
                name: 'Картинка №7',
                price: 750
            },
            {
                id: 7,
                url: '08.jpg',
                name: 'Картинка №8',
                price: 630
            },
            {
                id: 8,
                url: '09.jpg',
                name: 'Картинка №9',
                price: 499
            },
            {
                id: 9,
                url: '10.jpg',
                name: 'Картинка №10',
                price: 599
            },
            {
                id: 10,
                url: '11.jpg',
                name: 'Картинка №11',
                price: 901
            }
        ],
        finaleOrder: state.finaleOrder
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectPicture},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectPicture);