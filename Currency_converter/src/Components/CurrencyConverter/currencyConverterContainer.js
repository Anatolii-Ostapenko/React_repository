import {connect} from 'react-redux';
import {CurrencyConverter} from './CurrencyConverter';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate,
        currency: state.currency.currency,
        mySelectСurrency: state.mySelectСurrency
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyConverter);