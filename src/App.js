import './App.css';
import {useDispatch} from "react-redux";
import {getAllUsers, signIn} from "./store/services/authServices";


function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
    <button onClick={()=>{dispatch(signIn())}}>Sign In</button>
    <button onClick={()=>{dispatch(getAllUsers())}}>Sign In</button>
    </div>
  );
}

export default App;