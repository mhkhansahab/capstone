export const SET_CHATS = "SET_CHATS";


export const setChats = (chats) => (dispatch) => {
    dispatch({
        type : SET_CHATS,
        payload : chats
    })
}