import firebase from "./../../config/firebaseConfig";
import { deleteUsers, setAllUsers, setUser } from "../actions/authActions";
import { setLogin, setFirstLogin, setLoader } from "../actions/statusActions";
import { deleteChats } from "../actions/chatActions";

export const getAllUsers = () => async (dispatch) => {
  firebase
    .database()
    .ref("/")
    .child(`users/`)
    .on("value", (snapshot) => {
      dispatch(setAllUsers(snapshot.val()));
    });
};

export const getUser = async (uid) => {
  return await firebase.database().ref("/").child(`users/${uid}`).get();
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
      };

      dispatch(setLoader(true));
      getUserAndSetData(user.uid, signInUser, dispatch);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(deleteUsers());
      dispatch(deleteChats());
      dispatch(setFirstLogin(false));
      dispatch(setLoader(false));
      window.localStorage.removeItem("loginUser");
      alert("Sign Out Successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUser = (uid, data) => async (dispatch) => {
  firebase.database().ref("/").child(`users/${uid}`).update(data);
  window.localStorage.setItem("loginUser", JSON.stringify(data));
  dispatch(setUser(data));
};

export const getUserAndSetData = (id , user, dispatch) => {
  getUser(id).then((data) => {
    if (data.exists()) {
      if (data.val().role) {
        window.localStorage.setItem("loginUser",JSON.stringify(data.val()));
        dispatch(setUser(data.val()));
      } else {
        dispatch(setUser(user));
        dispatch(setFirstLogin(true));
      }
    } else {
      firebase
        .database()
        .ref("/")
        .child(`users/${id}`)
        .set(user);
      dispatch(setUser(user));
      dispatch(setFirstLogin(true));
    }
  });

  dispatch(setLogin(true));
}