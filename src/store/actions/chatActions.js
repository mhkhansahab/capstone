export const SET_CHATS = "SET_CHATS";
export const DELETE_CHATS = "DELETE_CHATS";
export const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";


export const setChats = (chats) => (dispatch) => {
    dispatch({
        type : SET_CHATS,
        payload : chats
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