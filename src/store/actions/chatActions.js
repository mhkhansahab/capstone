export const SET_CHATS = "SET_CHATS";
export const DELETE_CHATS = "DELETE_CHATS";
export const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";


export const setChats = (chat) => (dispatch, getState) => {
    let flag = false;
    const previousState = [...getState().chatReducer.chats];
    const key = Object.keys(chat)[0];
    previousState.forEach((item)=>{
        const itemKey = Object.keys(item)[0];
        if(key === itemKey){
            flag = true;
        }
    })
    if(chat !== null && flag === false){
        previousState.push(chat);
    }
    
    dispatch({
        type : SET_CHATS,
        payload : previousState
    })
}

export const setCurrentChat = (chat) => (dispatch) => {
    dispatch({
        type : SET_CURRENT_CHAT,
        payload : chat
    })
}

export const deleteChats = () => (dispatch) => {
    dispatch({
        type : DELETE_CHATS
    })
}