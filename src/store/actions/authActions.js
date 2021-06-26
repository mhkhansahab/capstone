export const SET_USER = "SET_USER";
export const SET_CHAT_USER = "SET_CHAT_USER";
export const DELETE_USERS = "DELETE_USERS";
export const SET_ALL_USERS = "GET_ALL_USERS";

export const setUser = (user)=>(dispatch)=>{
    dispatch({
        type: SET_USER,
        payload: user,
      });
}
export const setChatUser = (user)=>(dispatch)=>{
  dispatch({
      type: SET_CHAT_USER,
      payload: user,
    });
}
export const deleteUsers = ()=>(dispatch)=>{
    dispatch({
        type: DELETE_USERS,
      });
}

export const setAllUsers = (users)=>(dispatch)=>{
    
    const previousState = [];
    if(users !== null){
      previousState.push(users);
  }
    

    dispatch({
        type: SET_ALL_USERS,
        payload : previousState
      });
}
