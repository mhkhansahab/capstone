import { SET_CHATS } from "../actions/chatActions";

const initialState = {
    chats : []
}


const reducer = (state = initialState, actions) =>{
    const {type, payload} = actions;
    switch (type) {
        case SET_CHATS:
            return{
                ...state,
                chats : payload
            }
        default:
    }
    return state;
}

export default reducer;