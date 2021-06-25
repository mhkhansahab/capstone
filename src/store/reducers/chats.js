import { SET_CHATS , SET_CURRENT_CHAT} from "../actions/chatActions";

const initialState = {
    chats : [],
    currentChat : []
}


const reducer = (state = initialState, actions) =>{
    const {type, payload} = actions;
    switch (type) {
        case SET_CHATS:
            return{
                ...state,
                chats : payload
            }
        case SET_CURRENT_CHAT:
            return{
                ...state,
                currentChat : payload
            }
        default:
    }
    return state;
}

export default reducer;