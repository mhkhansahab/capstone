import ContactPage from './containers/ContactPage/ContactPage';
import ChatLayout from './containers/ChatLayout/ChatLayout';
import './App.css';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import {useDispatch} from "react-redux";
//import {getAllUsers, signIn} from "./store/services/authServices";
import {mergeID, sendMessage, getYourChats} from "./store/services/chatServices";



function App() {  
  return (
    <div className="App">
      <ChatLayout/>
      <ContactPage/>
      {/* <LoginButton/>
      <HomeSubContainer/> */}
      <HomeScreen/>


    {/* <button onClick={()=>myFunc()}>Send Message</button>
    <button onClick={()=>myFunc2()}>Send Message 2</button>
    <button onClick={()=>myFunc3()}>Send Message 3</button> */}
    </div>
  );
}

export default App;