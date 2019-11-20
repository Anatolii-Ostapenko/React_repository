export default function(state={}, action){
    switch(action.type){
        case "SELECRED_ITEM":
            let result = {...state, selectedItem: action.payload};
            return result
        default:
            return state;
    }

}