import {connect} from 'react-redux';
import {AvailableGames} from './AvailableGames';
import {bindActionCreators} from 'redux';


const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AvailableGames);