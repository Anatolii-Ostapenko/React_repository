import {combineReducers} from 'redux';
import exchangeRate from './exchangeRate';
import setPage from './setPage';
import currency from './currency';
import mySelectСurrency from './mySelectCurrency'


export default combineReducers({
    exchangeRate,
    setPage,
    currency,
    mySelectСurrency
});