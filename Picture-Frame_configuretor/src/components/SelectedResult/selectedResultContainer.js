import {connect} from 'react-redux';
import {SelectedResult} from './SelectedResult';
import {bindActionCreators} from 'redux';
import {nextStep} from '../../action/index'


const  mapStateToProps = (state)=>{
    return {
        finaleOrder: state.finaleOrder,
        orderDesigner: state.orderDesigner
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({nextStep},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedResult);