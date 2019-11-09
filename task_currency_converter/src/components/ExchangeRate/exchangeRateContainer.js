import {connect} from 'react-redux';
import {ExchangeRate} from './ExchangeRate';

const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate ? state.exchangeRate.exchangeRate : []
    }
};
export default connect(mapStateToProps)(ExchangeRate);