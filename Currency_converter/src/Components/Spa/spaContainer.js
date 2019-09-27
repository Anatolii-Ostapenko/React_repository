import {connect} from 'react-redux';
import {Spa} from './Spa';
import {bindActionCreators} from 'redux';
import {gettingExchangeRate} from '../../action/index'

const  mapStateToProps = (state)=>{
    return {
        exchangeRate: state.exchangeRate,
        setPage: state.setPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({gettingExchangeRate},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Spa);