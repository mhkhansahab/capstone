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
    console.log(data);
  try{
      const response = await fetch(
          "https://text-sentiment.p.rapidapi.com/analyze",
          {
            method: "POST",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "x-rapidapi-key": "2afdc9fa8cmsheaa6d800875c59ap1ef7c6jsn8f0411164b7f",
              "x-rapidapi-host": "text-sentiment.p.rapidapi.com",
            },
            body: {
              text: data,
            },
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
    console.log(analysis);

    // firebase.database().ref("/").child(`users/${user.uid}`).update({
    //     ...user,
    //     violation : user.violation + 1
    // })
};
