import firebase from "./../../config/firebaseConfig";
import { deleteUser, setAllUsers, setUser } from "../actions/authActions";
import { setLogin , setFirstLogin} from "../actions/statusActions";

export const getAllUsers = () => async (dispatch) => {
    firebase
      .database()
      .ref("/")
      .child(`users/`)
      .on("value",(snapshot) => {
          dispatch(setAllUsers(snapshot.val()))
      })
  };

export const getUser = async (uid) => {
  return await (await firebase.database().ref("/").child(`users/${uid}`).get()).exists();
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
  
        getUser(user.uid)
        .then((isAvailable)=>{
          if (isAvailable !== true) {
            firebase.database().ref("/").child(`users/${user.uid}`).set(signInUser);
            dispatch(setFirstLogin(true));
          }
        })
        

        dispatch(setUser(signInUser));
        dispatch(setLogin(true));
        //window.localStorage.setItem("isLogin",true);

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