import {connect} from 'react-redux';
import {СurrencyСonverter} from './СurrencyСonverter';

const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate ? state.exchangeRate.exchangeRate : []
    }
};

export default connect(mapStateToProps)(СurrencyСonverter);