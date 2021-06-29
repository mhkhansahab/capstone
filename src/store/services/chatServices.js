import { setChats, setCurrentChat } from "../actions/chatActions";
import firebase from "./../../config/firebaseConfig";
import { useSelector } from "react-redux";

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
      const chats = snapshot.val();
      dispatch(setChats(chats));
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
  try{
      const response = await fetch(
          // "https://textblob-sentiment-analysis.herokuapp.com/analyze",
          "http://localhost:8000/analyze",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin" : "*"
              },
            body: {
              text: data,
            },
          }
        );
    //const jsonResponse = await response.json();
    return response;
  }catch(error){
      console.log(error);
  }
};

export const setAnalysis = (data, user) => async () => {
    const analysis = await getAnalysis(data);
    console.log(analysis);

    // firebase.database().ref("/").child(`users/${user.uid}`).update({
    //     ...user,
    //     violation : user.violation + 1
    // })
};
