import {connect} from 'react-redux';
import {TotalWon} from './TotalWon';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TotalWon);