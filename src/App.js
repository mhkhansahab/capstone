import './App.css';
import {useDispatch} from "react-redux";
//import {getAllUsers, signIn} from "./store/services/authServices";
import {mergeID, sendMessage, getYourChats} from "./store/services/chatServices";


function App() {
  const dispatch = useDispatch();

  const myFunc = ()=>{
    const id = mergeID("def123def", "abc123abc");
    console.log(id);
    dispatch(sendMessage(id, {
      message: "Hello World",
      sender : "Hamza"
    }));}

    const myFunc2 = ()=>{
      const id = mergeID("def123def", "a123a");
      console.log(id);
      dispatch(sendMessage(id, {
        message: "Hello World 2.0",
        sender : "Ibrahim"
      }));}

      const myFunc3 = ()=>{
        //const id = mergeID("de123ef", "abc123abc");
        dispatch(getYourChats("def123def"));}

  
  return (
    <div className="App">
    <button onClick={()=>myFunc()}>Send Message</button>
    <button onClick={()=>myFunc2()}>Send Message 2</button>
    <button onClick={()=>myFunc3()}>Send Message 3</button>
    </div>
  );
}

export default App;