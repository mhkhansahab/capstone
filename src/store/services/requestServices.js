import { setAllRequests } from "../actions/requestActions";
import firebase from "./../../config/firebaseConfig";

export const getAllRequests = ()=> async (dispatch) => {
    firebase.database().ref("/messageRequests/").on("value",
    (snapshot)=>{
        dispatch(setAllRequests(snapshot.val()));
    })
}

export const acceptRequest = (user, currentUserID, question ,requestID)=> ()=>{
    firebase.database().ref("/").child(`chats/${user.uid + currentUserID}/`)
    .push({
        ...user,
        message : question
    })

    firebase.database().ref("/").child(`messageRequests/${requestID}`).remove();
}