import {connect} from 'react-redux';
import {WinnersList} from './WinnersList';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WinnersList);