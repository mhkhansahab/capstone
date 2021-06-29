export const GET_REQUESTS = "GET_REQUESTS";
export const DELETE_REQUESTS = "DELETE_REQUESTS";

export const setAllRequests = (requests) => (dispatch) => {
    const previousState = [];
    if(requests !== null){
        previousState.push(requests);
    }
    
    dispatch({
        type : GET_REQUESTS,
        payload : previousState
    })
}

export const deleteAllRequests = () => (dispatch) => {
     
    dispatch({
        type : DELETE_REQUESTS,
    })
}
