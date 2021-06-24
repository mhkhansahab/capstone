export const SET_LOGIN = "SET_LOGIN";
export const SET_FIRST_LOGIN = "SET_FIRST_LOGIN";


export const setLogin = (status)=>(dispatch)=>{
    dispatch({
      type : SET_LOGIN,
      payload : status
    })
  }

  export const setFirstLogin = (status) => (dispatch) => {
    dispatch({
      type : SET_FIRST_LOGIN,
      payload : status
    })
  }