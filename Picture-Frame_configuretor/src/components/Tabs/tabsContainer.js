import {connect} from 'react-redux';
import {Tabs} from './Tabs';

const  mapStateToProps = (state)=>{
    return {
        orderDesigner: state.orderDesigner
    }
};


export default connect(mapStateToProps)(Tabs);