import {combineReducers} from 'redux';
import finaleOrder from './finaleOrder';
import orderDesigner from './orderDesigner';

export default combineReducers({
    finaleOrder,
    orderDesigner
});