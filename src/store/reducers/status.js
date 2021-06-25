import {
  SET_LOGIN,
  SET_FIRST_LOGIN,
  SET_LOADER,
  SET_MODAL
} from "./../actions/statusActions";

const initialState = {
  isLogin: false,
  isFirstLogin: false,
  showLoader: false,
  showModal: false,
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin: payload,
      };
    case SET_FIRST_LOGIN:
      return {
        ...state,
        isFirstLogin: payload,
      };
    case SET_LOADER:
      return {
        ...state,
        showLoader: payload,
      };
    case SET_MODAL:
      return {
        ...state,
        showModal: payload,
      };
    default:
  }

  return state;
};

export default reducer;
