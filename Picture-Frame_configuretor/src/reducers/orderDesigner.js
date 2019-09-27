
export default function(state=null, action){
    if(state == null){
        return{
            step: 0
        }
    }
    switch(action.type){
        case "NEXT_STEP":
        var newState = {...state};
            if(newState.step < 3){
                newState.step ++;
                return newState
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {...state, userArr: action.payload }
        default: 
         return state
    }
};
