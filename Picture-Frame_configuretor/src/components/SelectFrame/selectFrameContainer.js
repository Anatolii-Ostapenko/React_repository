import {connect} from 'react-redux';
import {SelectFrame} from './SelectFrame';
import {bindActionCreators} from 'redux';
import {selectFrame} from '../../action/index'



const  mapStateToProps = (state)=>{
    return {
        frames: [
            {
                id: 0,
                url: 'rama-01.png',
                name: 'Рамка №1',
                price: 120
            },
            {
                id: 1,
                url: 'rama-02.png',
                name: 'Рамка №2',
                price: 250
            },
            {
                id: 2,
                url: 'rama-03.png',
                name: 'Рамка №3',
                price: 330
            },
            {
                id: 3,
                url: 'rama-04.png',
                name: 'Рамка №4',
                price: 100
            },
            {
                id: 4,
                url: 'rama-05.png',
                name: 'Рамка №5',
                price: 249
            },
            {
                id: 5,
                url: 'rama-06.png',
                name: 'Рамка №6',
                price: 150
            },
            {
                id: 6,
                url: 'rama-07.png',
                name: 'Рамка №7',
                price: 330
            },
            {
                id: 7,
                url: 'rama-08.png',
                name: 'Рамка №8',
                price: 230
            },
            {
                id: 8,
                url: 'rama-09.png',
                name: 'Рамка №09',
                price: 380
            },
            {
                id: 9,
                url: 'rama-10.png',
                name: 'Рамка №10',
                price: 259
            },
            {
                id: 10,
                url: 'rama-11.png',
                name: 'Рамка №11',
                price: 690
            },
            {
                id: 11,
                url: 'rama-12.png',
                name: 'Рамка №12',
                price: 290
            },
            {
                id: 12,
                url: 'rama-13.png',
                name: 'Рамка №13',
                price: 400
            },
            {
                id: 13,
                url: 'rama-14.png',
                name: 'Рамка №14',
                price: 260
            },
            {
                id: 14,
                url: 'rama-15.png',
                name: 'Рамка №15',
                price: 450
            }
        ],
        finaleOrder: state.finaleOrder
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectFrame},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectFrame);