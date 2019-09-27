export const gettingExchangeRate = (json) =>{
    return{
        type: "GETTING_EXCHANGE_RATE" ,
        payload: json
    }
};
export const setPage = (page) =>{
    return{
        type: "SET_PAGE",
        payload: page
    }
};
export const mySelectСurrency = (selectCurrency) =>{
    return{
        type: "MY_SELECT_CURRENCY",
        payload: selectCurrency
    }
};


