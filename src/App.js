import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import ContactPage from "./containers/ContactPage/ContactPage";
import ChatLayout from "./containers/ChatLayout/ChatLayout";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import RolePage from "./containers/RolePage/RolePage";
import firebase from "./config/firebaseConfig";
import {setFirstLogin, setLogin} from "./store/actions/statusActions";
import { signOut , getUserAndSetData} from "./store/services/authServices";

function App() {

  const dispatch = useDispatch();
  const isLoginFromRedux = useSelector((state) => state.statusReducer.isLogin);
  const isFirstLoginFromRedux = useSelector((state) => state.statusReducer.isFirstLogin);

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          const user = JSON.parse(window.localStorage.getItem("loginUser"));
          dispatch(setLogin(true));
          getUserAndSetData(user.uid, user, dispatch);
        }else{
          dispatch(setLogin(false));
        }
      })

    const loginUser = JSON.parse(window.localStorage.getItem("loginUser"));
    if(loginUser){
      if(!loginUser.role){
        dispatch(setFirstLogin(true))
      }
    }
  },[]);

  return (
      <div className="App">
      <Switch>  
      {isLoginFromRedux === false ? 
      <Route path = "/"><HomeScreen></HomeScreen></Route>
      :
      <>
      {
      isFirstLoginFromRedux ? <Route path="/" exact><RolePage></RolePage></Route> : 
        <>
          <Route path = "/" exact><ContactPage></ContactPage></Route>
          <Route path = "/chat"><ChatLayout></ChatLayout></Route>
        </>
        }
        </>
      }
      </Switch>
      <button onClick={()=>dispatch(signOut())}>Sign Out</button>
      </div>
  );
}

export default App;