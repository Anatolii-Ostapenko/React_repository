import {connect} from 'react-redux';
import {HeaderExchangeRate} from './HeaderExchangeRate';
import {putExchangeRateToStore} from '../../action/index';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate 
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({putExchangeRateToStore},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderExchangeRate);