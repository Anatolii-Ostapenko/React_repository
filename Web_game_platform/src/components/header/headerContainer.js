import {connect} from 'react-redux';
import {Header} from './Header';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);