import { DELETE_USER, SET_USER , SET_ALL_USERS} from "../actions/authActions";

const initialState = {
    users : [],
    currentUser : [],
}


const reducer = (state = initialState, actions) =>{
    const {type, payload} = actions; 
    switch (type) {
        case SET_ALL_USERS:
            return {
                ...state,
                users : payload
            }
        case SET_USER:
            return {
                ...state,
                currentUser : [payload]
            }
        case DELETE_USER:
            return {
                ...state,
                currentUser : []
            }
        default:
    }
    return state;
}

export default reducer;