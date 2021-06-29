import { setChats, setCurrentChat } from "../actions/chatActions";
import firebase from "./../../config/firebaseConfig";

export const mergeID = (firstID, secondID) => {
  if (firstID > secondID) {
    return firstID + secondID;
  } else {
    return secondID + firstID;
  }
};

export const sendMessage = (id, message) => async () => {
  firebase.database().ref("/").child(`chats/${id}/`).push(message);
};

export const getYourChats = (id) => async (dispatch) => {
  firebase
    .database()
    .ref("/")
    .child(`chats`)
    .on("value", (snapshot) => {
      if(snapshot.exists()){
        const chats = snapshot.val();
        const keys = Object.keys(snapshot.val());
      keys.forEach((key)=>{
        if(key.includes(id)){
          const obj = {
            [key] : chats[key]
          }
          dispatch(setChats(obj));
        }
      })
      }
    });
};
export const initializeCurrentChat = (id) => (dispatch) => {
  firebase
    .database()
    .ref("/")
    .child(`chats/${id}`)
    .on("value", (snapshot) => {
      dispatch(setCurrentChat(snapshot.val()));
    });
};

export const getAnalysis = async (data) => {
  const obj = {
    text: data
  }
  try{
      const response = await fetch(
        "https://textblob-sentiment-analysis.herokuapp.com/analyze",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin" : "*"
              },
            body: JSON.stringify(obj),
          }
        );
    const jsonResponse = await response.json();
    return jsonResponse;
  }catch(error){
      console.log(error);
  }
};

export const setAnalysis = (data, user) => async () => {
    const analysis = await getAnalysis(data);
    console.log(analysis)
    if(analysis.polarity <= -0.3){
      firebase.database().ref("/").child(`users/${user.uid}`).update({
        ...user,
        violation : user.violation + 1
    })
    }
};
