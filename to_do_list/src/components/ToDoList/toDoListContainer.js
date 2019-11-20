import {connect} from 'react-redux';
import {ToDoList} from './ToDoList';
import {addData, selectedItem, removeItem, addDataTolocalStorage} from '../../action/index';
import {bindActionCreators} from 'redux';

const  mapStateToProps = (state)=>{
    return {
        tasks: state.toDoList,
        item: state.selectedItem ? state.selectedItem.selectedItem : null
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addData, selectedItem, removeItem, addDataTolocalStorage},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);