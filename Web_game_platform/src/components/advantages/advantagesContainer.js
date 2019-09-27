import {connect} from 'react-redux';
import {Advantages} from './Advantages';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Advantages);