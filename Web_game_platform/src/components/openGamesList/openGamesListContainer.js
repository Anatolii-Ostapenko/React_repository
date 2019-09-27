import {connect} from 'react-redux';
import {OpenGamesList} from './OpenGamesList';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
        openGameList: state.openGameList
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(OpenGamesList);