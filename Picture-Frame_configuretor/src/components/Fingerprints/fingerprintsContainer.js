import {connect} from 'react-redux';
import {Fingerprints} from './Fingerprints';
import {bindActionCreators} from 'redux';
import {setFingerPrints} from '../../action/index'


const  mapStateToProps = (state)=>{
    return {
        fingerPrints: [
            {
                id: 0,
                url: 'BahamaBlue.jpg',
                color: '#315edd'
            },
            {
                id: 1,
                url: 'BambooLeaves.jpg',
                color: '#96ac64'
            },
            {
                id: 2,
                url: 'CottageIvy.jpg',
                color: '#217541'
            },
            {
                id: 3,
                url: 'LilacPosies.jpg',
                color: '#b63292'
            },
            {
                id: 4,
                url: 'PearTart.jpg',
                color: '#ddda44'
            },
            {
                id: 5,
                url: 'PottersClay.jpg',
                color: '#d38740'
            },
            {
                id: 6,
                url: 'RhubarbStalk.jpg',
                color: '#b81d50'
            },
            {
                id: 7,
                url: 'Tangelo.jpg',
                color: '#ef8a4e'
            }
        ], finaleOrder: state.finaleOrder
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setFingerPrints},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Fingerprints);