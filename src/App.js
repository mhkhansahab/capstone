import ContactPage from "./containers/ContactPage/ContactPage";
import ChatLayout from "./containers/ChatLayout/ChatLayout";
import HomeScreen from "./containers/HomeScreen/HomeScreen";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Switch, Route , Redirect} from "react-router-dom";
import { useEffect } from "react";
import {setLogin} from "./store/actions/statusActions";

function App() {

  const dispatch = useDispatch();
  const isLoginFromRedux = useSelector((state) => state.statusReducer.isLogin);
  
    useEffect(() => {
    const isLogin = window.localStorage.getItem("isLogin");
    if(isLogin){
      dispatch(setLogin(true));
    }
  },[]);

  return (
      <div className="App">
      <Switch>  
      {isLoginFromRedux === false ? 
      <Route path = "/"><HomeScreen></HomeScreen></Route>
      :
      <>
      <Route path = "/" exact><ContactPage></ContactPage></Route>
      <Route path = "/chat"><ChatLayout></ChatLayout></Route>
      </>
      }
      </Switch>
      </div>
  );
}

export default withRouter(App);