import {connect} from 'react-redux';
import {Sum} from './Sum';

const  mapStateToProps = (state)=>{
    return {
        finaleOrder: state.finaleOrder
    }
}

export default connect(mapStateToProps)(Sum);