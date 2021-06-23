export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_ALL_USERS = "GET_ALL_USERS";

export const setUser = (user)=>(dispatch)=>{
    dispatch({
        type: SET_USER,
        payload: user,
      });
}
export const deleteUser = ()=>(dispatch)=>{
    dispatch({
        type: DELETE_USER,
      });
}

export const setAllUsers = (users)=>(dispatch,getState)=>{
    
    const previousState = [...getState().userReducer.users];
    previousState.push(users)

    dispatch({
        type: SET_ALL_USERS,
        payload : previousState
      });
}