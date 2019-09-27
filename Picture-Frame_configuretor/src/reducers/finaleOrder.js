export default function(state=null, action){
    
    switch(action.type){
        case "SELECT_PICTURE":
            return {...state, selectedPicture: action.payload }
        case "SELECT_FRAME":
            return {...state, selectedFrame: action.payload }
        case "SET_TITLE":
            return {...state, title: action.payload }
        case "SET_SIGNATURE":
            return {...state, signature: action.payload }
        case "SET_EVENT_DATE":
            return {...state, date: action.payload }
        case "SET_FONT":
            return {...state, font: action.payload }
        case "SET_FINGER_PRINTS":
            if(!state.setFingerPrints){
                state.setFingerPrints = [];
            }
            var newState = {...state};
            newState.setFingerPrints.push(action.payload);
            return newState
        default:
            return state
            
    }
};

