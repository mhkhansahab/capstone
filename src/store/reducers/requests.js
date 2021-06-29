import { GET_REQUESTS, DELETE_REQUESTS } from "../actions/requestActions";

const initialState = {
  requests: [],
};

const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: payload,
      };
    case DELETE_REQUESTS:
      return {
        ...state,
        requests: [],
      };
    default:
  }
  return state;
};

export default reducer;
