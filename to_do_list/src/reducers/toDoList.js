export default function(state, action){
    let getDataFromLocalStorage = localStorage.getItem('session');
    if(state === undefined && getDataFromLocalStorage !== null){
        let convertToArray = JSON.parse(getDataFromLocalStorage);
       return convertToArray
    } else if (state === undefined) {
        return []}
    switch(action.type){
        case "ADD_DATA":
            let arr = [...state]; 
            arr.push(action.payload);
            return arr;
        case "ADD_MESSAGE":
            let result = [...state]
            for(let item of result){
                if(item.id === action.payload[1]){
                    item.arrayOfComments = [...item.arrayOfComments, action.payload[0]]
                }
            }
            return result;
        case "REMOVE_ITEM":
            let tmp = [];
            for(let item of state){
                if(item.id !== action.payload){
                    tmp.push(item);
                }
            }
            return tmp
        case "ADD_DATA_TO_LOCAL-STORAGE":
            let convertToJson = JSON.stringify([...state]);
            localStorage.setItem('session', convertToJson);
            return state;
        default:
            return state;
    }

}
