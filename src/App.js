import ContactPage from './containers/ContactPage/ContactPage';
import ChatLayout from './containers/ChatLayout/ChatLayout';
import './App.css';
import { useEffect } from "react";
import {getYourChats} from "./store/services/chatServices";
import {getAllUsers} from "./store/services/authServices";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "./store/services/authServices";

function App() {
 
  const dispatch = useDispatch();
  const sender = useSelector((state)=>state.userReducer.demoCurrentUser);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getYourChats(sender.uid));
  }, [])
  
  return (
    <div className="App">
      <ChatLayout/>
      {/* <ContactPage/> */}
      {/* <button onClick={()=>dispatch(signIn())}>Sign In</button> */}
    </div>
  );
}

export default App;