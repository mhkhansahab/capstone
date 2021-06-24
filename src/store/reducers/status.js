import {SET_LOGIN, SET_FIRST_LOGIN} from "./../actions/statusActions";

const initialState = {
    isLogin : false,
    isFirstLogin : false,
}

const reducer = (state = initialState, actions)=>{
    const {type , payload} = actions;
    switch (type) {
        case SET_LOGIN:
            return {
                ...state,
                isLogin : payload
            }    
        case SET_FIRST_LOGIN:
            return {
                ...state,
                isFirstLogin : payload
            } 
    
        default:
    }
    
    return state;
}

export default reducer;