import {connect} from 'react-redux';
import {Title} from './Title';
import {bindActionCreators} from 'redux';
import {setTitle, setSignature, setEventDate, setFont} from '../../action/index'

const  mapStateToProps = (state)=>{
    return {
        finaleOrder: state.finaleOrder
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setTitle, setSignature, setEventDate, setFont},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Title);