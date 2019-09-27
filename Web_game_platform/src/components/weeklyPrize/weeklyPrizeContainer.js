import {connect} from 'react-redux';
import {WeeklyPrize} from './WeeklyPrize';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WeeklyPrize);