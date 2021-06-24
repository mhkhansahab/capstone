import { DELETE_USER, SET_USER , SET_ALL_USERS} from "../actions/authActions";

const initialState = {
    users : [],
    currentUser : null,
    chatUser : null,
    demoCurrentUser : {
        email : "hamza.khansahab@gmail.com",
        name : "Hamza Khan",
        uid : "HPmR9nB9rEQTqDrohPMBbY6oS8K2",

    },
    demoChatUser :  {
        email : "ep19102062.mhamzakhan@gmail.com",
        name : "Muhammad Hamza Khan",
        uid : "oN1z78PtOHZg4UexrGGRFRbpWN02",

    }
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
                currentUser : payload
            }
        case DELETE_USER:
            return {
                ...state,
                currentUser : null
            }
        default:
    }
    return state;
}

export default reducer;