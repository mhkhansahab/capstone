import { DELETE_USERS, SET_USER, SET_ALL_USERS, SET_CHAT_USER } from "../actions/authActions";

const initialState = {
  users: [],
  currentUser: null,
  chatUser: null,
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case SET_CHAT_USER:
      return {
        ...state,
        chatUser: payload,
      };
    case DELETE_USERS:
      return {
        ...state,
        users: [],
        currentUser: null,
        chatUser: null,
      };
    default:
  }
  return state;
};

export default reducer;
