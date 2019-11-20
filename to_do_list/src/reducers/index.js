import {combineReducers} from 'redux';
import toDoList from './toDoList';
import selectedItem from './selectedItem';

export default combineReducers({
    toDoList,
    selectedItem
});