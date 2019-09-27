export const nextStep = () =>{
    return{
        type: "NEXT_STEP" 
    }
};

export const selectPicture = (img) =>{
    return{
        type: "SELECT_PICTURE" ,
        payload: img
    }
};

export const selectFrame = (frame) =>{
    return{
        type: "SELECT_FRAME" ,
        payload: frame
    }
};

export const setTitle = (text) =>{
    return{
        type: "SET_TITLE" ,
        payload: text
    }
};

export const setSignature = (text) =>{
    return{
        type: "SET_SIGNATURE" ,
        payload: text
    }
};

export const setEventDate = (text) =>{
    return{
        type: "SET_EVENT_DATE" ,
        payload: text
    }
};

export const setFont = (text) =>{
    return{
        type: "SET_FONT" ,
        payload: text
    }
};
export const setFingerPrints = (finger) =>{
    return{
        type: "SET_FINGER_PRINTS" ,
        payload: finger
    }
};
/*
export const loadData = (dispatch) =>{
    fetch('/test.json')
    .then(response => response.json())
    .then(json => {dispatch(fetchProductsSuccess(json.products))})
}

export const fetchProductsSuccess = (people) =>{
    return{
        type: "FETCH_PRODUCTS_SUCCESS" ,
        payload: people
    }
};*/

