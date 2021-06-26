import SenderBubble from "./../../atoms/SenderBubble/SenderBubble";
import RecieverBubble from "./../../atoms/RecieverBubble/RecieverBubble";
import { withStyles } from "@material-ui/styles";
import { styles } from "./MessageContainer.style";
import {useDispatch , useSelector} from "react-redux";
import {initializeCurrentChat} from "./../../../store/services/chatServices"
import { withRouter } from 'react-router-dom';
import { useEffect } from "react";

const MessageContainer = ({ classes , ...props}) => {
  const dispatch = useDispatch();
  const id = (props.location.search.split("="))[1];
  const messages = useSelector((state)=>state.chatReducer.currentChat);
  const currentUser = useSelector((state)=>state.userReducer.currentUser);
  
  useEffect(() => {
    dispatch(initializeCurrentChat(id));
  }, [])
  
  return (
    <div className={classes.messageContainer}>
     
      { messages ? Object.entries(messages).map((item)=>{
        return item[1].uid === currentUser.uid ? 
        <SenderBubble text= {item[1].message} key={item[0]}/>
        :
        <RecieverBubble text={item[1].message} key={item[0]}/>
        }) : null
      }
    </div>
  );
};

export default withStyles(styles)(withRouter(MessageContainer));
