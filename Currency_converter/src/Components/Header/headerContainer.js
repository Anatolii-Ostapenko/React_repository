import {connect} from 'react-redux';
import {Header} from './Header';
import {bindActionCreators} from 'redux';
import {setPage, mySelectСurrency} from '../../action/index'

const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate,
        currency: state.currency.currency
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setPage, mySelectСurrency},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);