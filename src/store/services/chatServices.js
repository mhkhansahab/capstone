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
 export const initializeCurrentChat = ()=> (dispatch)=>{
    const chats = useSelector((state)=>state.chatReducer.chats);
    const chatUser = useSelector((state)=>state.userReducer.demoChatUser);
  
    for(const key in chats){
      if(key.includes(chatUser.uid)){
        dispatch(setCurrentChat(chats[key]))
      }
    }
 }