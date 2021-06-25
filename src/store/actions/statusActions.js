export const SET_LOGIN = "SET_LOGIN";
export const SET_FIRST_LOGIN = "SET_FIRST_LOGIN";
export const SET_LOADER = "SET_LOADER";
export const SET_MODAL = "SET_MODAL";


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

  export const setLoader = (status) => (dispatch) => {
    dispatch({
      type : SET_LOADER,
      payload : status
    })
  }

  export const setModal = (status) => (dispatch) => {
    dispatch({
      type : SET_MODAL,
      payload : status
    })
  }