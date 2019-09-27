export default function(state=null, action){
    switch (action.type) {
        case "GETTING_EXCHANGE_RATE":
            return {...state, exchangeRate: action.payload }
        case "GET_DATE":
            return {...state, getDate: action.payload }
        default:
            return state;
    }
};