export default function(state=null, action){
    switch(action.type){
        case "PUT_EXCHANGE_RATE_TO_STORE":
            return {...state, exchangeRate : action.payload}
        default:
            return state;
    }

}