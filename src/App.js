import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import DesktopScreen from "./containers/DesktopScreen/DesktopScreen";
import ContactPage from "./containers/ContactPage/ContactPage";
import ChatLayout from "./containers/ChatLayout/ChatLayout";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import RolePage from "./containers/RolePage/RolePage";
import Modal from "./containers/Modal/Modal";
import firebase from "./config/firebaseConfig";
import { setFirstLogin, setLogin } from "./store/actions/statusActions";
import { getUserAndSetData } from "./store/services/authServices";
import CircularProgress from "@material-ui/core/CircularProgress";
import {setAnalysis} from "./store/services/chatServices";
import {
  isBrowser,
  isMobile
} from "react-device-detect";

function App() {
  const dispatch = useDispatch();
  const isLoginFromRedux = useSelector((state) => state.statusReducer.isLogin);
  const isFirstLoginFromRedux = useSelector(
    (state) => state.statusReducer.isFirstLogin
  );
  const user = useSelector((state) => state.userReducer.currentUser);

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
                {!user ? (
                  <div className="loader-container">
                    <div className="loader"><CircularProgress /></div>
                  </div>
                ) : (
                  <>
                    {isMobile ?
                      <>
                        <Route path="/" exact>
                          <div className="chat-container"><ContactPage></ContactPage></div>
                        </Route>
                        <Route path="/chat">
                          <div className="chat-container"><ChatLayout></ChatLayout></div>
                        </Route>
                      </> :
                      <DesktopScreen />
                    }

                  </>
                )}
              </>
            )}
          </>
        )}
      </Switch>
      <Modal></Modal>

    </div>
  );
}

export default App;
