import { setChats , setCurrentChat} from "../actions/chatActions";
import firebase from "./../../config/firebaseConfig";
import { useSelector } from "react-redux";

export const mergeID = (firstID, secondID)=>{
    if(firstID > secondID){
        return firstID + secondID;
    }else{
        return secondID + firstID;
    }
}

export const sendMessage = (id, message)=> async ()=>{
    firebase.database().ref("/").child(`chats/${id}/`)
    .push(message)
}

export const getYourChats = (id) => async (dispatch)=>{
    firebase.database().ref("/").child(`chats`)
    .on("value",(snapshot)=>{
        const chats = snapshot.val();
        dispatch(setChats(chats));
    })
}
 export const initializeCurrentChat = (id)=> (dispatch)=>{
    firebase.database().ref("/").child(`chats/${id}`).on("value",(snapshot)=>{
        dispatch(setCurrentChat(snapshot.val()));
    })
 }