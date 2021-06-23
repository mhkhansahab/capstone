import { setChats } from "../actions/chatActions";
import firebase from "./../../config/firebaseConfig";


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
    const myChats = [];
    firebase.database().ref("/").child(`chats`)
    .on("value",(snapshot)=>{
        const chats = snapshot.val();
        console.log("services===>",chats)
        for(const key in chats){
            if(key.includes(id)){
                myChats.push(chats[key])
            }
        }
        dispatch(setChats(myChats));
    })
}