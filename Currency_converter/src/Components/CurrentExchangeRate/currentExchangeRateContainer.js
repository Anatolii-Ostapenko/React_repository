import {connect} from 'react-redux';
import {CurrentExchangeRate} from './CurrentExchangeRate';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate,
        currency: state.currency.currency
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrentExchangeRate);