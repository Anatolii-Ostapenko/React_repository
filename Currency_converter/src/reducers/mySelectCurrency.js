export default function(state=null, action){
    switch (action.type) {
        case "MY_SELECT_CURRENCY":
        return {...state, mySelectСurrency: action.payload }
        default:
            return state;
    }
};