import {connect} from 'react-redux';
import {Comments} from './Comments';
import {addMessage, addDataTolocalStorage} from '../../action/index';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
        tasks: state.toDoList,
        item: state.selectedItem ? state.selectedItem.selectedItem : null
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addMessage, addDataTolocalStorage},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);