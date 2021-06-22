import firebase from "./../../config/firebaseConfig";
import { deleteUser, setAllUsers, setUser } from "../actions/actions";


export const getAllUsers = () => async (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child(`users/`)
      .on("child_added",(snapshot) => {
          dispatch(setAllUsers(snapshot.val()))
      })
  };


export const getUser = (uid) => async () => {
    firebase
      .database()
      .ref("/")
      .child(`users/${uid}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          return true;
        } else {
          return false;
        }
      });
  };
  
  export const signIn = () => async (dispatch) => {
       var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
  
        const signInUser = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          isOnline: true,
          isAvailable: false,
        };
  
        const userIsAvailable = getUser(user.uid);
        if (userIsAvailable !== true) {
          firebase.database().ref("/").child(`users/${user.uid}`).set(signInUser);
        }

        dispatch(setUser(signInUser))
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  export const signOut = () => async (dispatch) => {
    firebase.auth().signOut().then(() => {
        dispatch(deleteUser());
        alert("Sign Out Successful")
      }).catch((error) => {
        console.log(error)
      });
  };