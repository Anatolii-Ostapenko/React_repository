import {connect} from 'react-redux';
import {HomePage} from './HomePage';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);