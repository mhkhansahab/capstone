import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import ContactPage from "./containers/ContactPage/ContactPage";
import ChatLayout from "./containers/ChatLayout/ChatLayout";
import CounselorContact from "./containers/CounselorContact/ConselorContact";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import RolePage from "./containers/RolePage/RolePage";
import Modal from "./containers/Modal/Modal";
import firebase from "./config/firebaseConfig";
import { setFirstLogin, setLogin } from "./store/actions/statusActions";
import { signOut, getUserAndSetData } from "./store/services/authServices";

function App() {
  const dispatch = useDispatch();
  const isLoginFromRedux = useSelector((state) => state.statusReducer.isLogin);

  useEffect(() => {
    const loginUser = JSON.parse(window.localStorage.getItem("loginUser"));
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setLogin(true));
        getUserAndSetData(loginUser.uid, loginUser, dispatch);
      } else {
        dispatch(setLogin(false));
      }
    });

    if (loginUser) {
      if (!loginUser.role) {
        dispatch(setFirstLogin(true));
      }
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        {isLoginFromRedux === false ? (
          <Route path="/">
            <HomeScreen></HomeScreen>
          </Route>
        ) : (
          <>
            {isFirstLoginFromRedux ? (
              <Route path="/" exact>
                <RolePage></RolePage>
              </Route>
            ) : (
              
              <>
                <Route path="/" exact>
                  <ContactPage></ContactPage>
                </Route>
                <Route path="/chat">
                  <ChatLayout></ChatLayout>
                </Route>
              </>
            )}
          </>
        )}
      </Switch>
      <Modal></Modal>
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  );
}

export default App;
