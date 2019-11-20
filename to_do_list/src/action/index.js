export const addData = (data) => {
    return{
         type: 'ADD_DATA',
         payload: data
    } 
};
export const selectedItem = (index) => {
    return{
         type: 'SELECRED_ITEM',
         payload: index
    } 
};
export const addMessage = (text, item) => {
    return{
         type: 'ADD_MESSAGE',
         payload: [text, item]
    } 
};
export const removeItem = (index) => {
    return{
         type: 'REMOVE_ITEM',
         payload: index
    } 
};
export const addDataTolocalStorage = () => {
    return{
         type: 'ADD_DATA_TO_LOCAL-STORAGE'
    } 
};

