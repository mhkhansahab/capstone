import { withStyles } from "@material-ui/styles";
import { styles } from "./ContactPage.style";
import ContactList from "../../components/molecules/ContactList/ContactList";
import RequestList from "../../components/molecules/RequestList/RequestList";
import ContactFooter from "../../components/molecules/ContactFooter/ContactFooter";
import Header from "../../components/organisms/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getYourChats, mergeID } from "./../../store/services/chatServices";
import { getAllUsers } from "./../../store/services/authServices";
import { acceptRequest, getAllRequests } from "../../store/services/requestServices";
import { withRouter } from "react-router";
import { setChatUser } from "../../store/actions/authActions";

const ContactPage = ({ classes , history}) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const chats = useSelector((state)=>state.chatReducer.chats);
  const user = useSelector((state)=>state.userReducer.currentUser);
  const requests = useSelector((state)=>state.requestReducer.requests);
  
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getYourChats(user.uid));
    dispatch(getAllRequests());
  }, []);

  const acceptor = (singleUser, uid, question, requestID)=>{
    dispatch(acceptRequest(singleUser, uid, question, requestID));
    dispatch(setChatUser(singleUser));
    const id = mergeID(singleUser.uid, uid);
    history.push({
      pathname: '/chat',
      search: `?id=${id}`
    })
  }

  const goToChat = (userData) => {
    dispatch(setChatUser(userData));
    const id = mergeID(userData.uid, user.uid);
    history.push({
      pathname: '/chat',
      search: `?id=${id}`
    })
  }

  return (
    <>
      <div className={classes.contactContainer}>
      <div className={classes.head}>
        <Header />
        <h3>Hello, {user.name}</h3>
      </div>
      <div className={classes.listContainer}>
        {
        chats ? chats.map((item)=>{
          const key = (Object.keys(item))[0];
          return users.map((element)=>{
            const userArr = Object.entries(element);
            return userArr.map((userData)=>{
              const singleUser = userData[1];
              if(key.includes(singleUser.uid)){
                if(user.uid !== singleUser.uid){
                  return <ContactList name = {singleUser.name} key={singleUser.uid} onClick={()=>goToChat(singleUser)}></ContactList>
                }
              }
            })
          })}) : null
        }       
      
      <div>
        { 
          requests ? requests.map((item)=>{
            const requestArr = Object.entries(item);
            const requestID = requestArr[0][0];
            const requestData = requestArr[0][1];
            const userID = (requestArr[0][1]).uid;
            
            return users.map((element)=>{
              const userArr = Object.entries(element);
              return userArr.map((userData)=>{
                const singleUser = userData[1];
                if(userID === singleUser.uid){
                  if(user.uid !== singleUser.uid){
                    return <RequestList name = {singleUser.name} 
                    question={requestData.question} 
                    key={singleUser.uid} 
                    showMine={false}
                    onClick={()=>acceptor(singleUser, user.uid, requestData.question, requestID)}></RequestList>
                  }else{
                    return <RequestList name = {singleUser.name} 
                    question={requestData.question} 
                    key={singleUser.uid} 
                    showMine={true}
                    onClick={()=>acceptor(singleUser, user.uid, requestData.question, requestID)}></RequestList>
                  }
                }
              })
            })
          }) : null
        }
        
      </div>
      </div>
      <ContactFooter />
      </div>
    </>
  );
};

export default withStyles(styles)(withRouter(ContactPage));
