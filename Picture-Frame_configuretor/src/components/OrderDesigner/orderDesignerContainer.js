import {connect} from 'react-redux';
import {OrderDesigner} from './OrderDesigner';
import {bindActionCreators} from 'redux';
import {loadData} from '../../action/index'

const  mapStateToProps = (state)=>{
    return {
        orderDesigner: state.orderDesigner, 
        userArr: state.orderDesigner.userArr
    }
}
const mapDispatchToProps = (dispatch) => {
  //  var c = dispatch;
    return bindActionCreators({loadData: ()=>{
        //loadData(c)
    }},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderDesigner);