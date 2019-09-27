import {connect} from 'react-redux';
import {Games} from './Games';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Games);