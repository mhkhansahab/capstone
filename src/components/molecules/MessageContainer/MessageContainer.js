import SenderBubble from "./../../atoms/SenderBubble/SenderBubble";
import RecieverBubble from "./../../atoms/RecieverBubble/RecieverBubble";
import { withStyles } from "@material-ui/styles";
import { styles } from "./MessageContainer.style";
import { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";
import {initializeCurrentChat} from "./../../../store/services/chatServices"

const MessageContainer = ({ classes }) => {
  const dummy = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id dolores delectuconsequatur iste quidem doloremque non natus corrupti veritatis voluptatem, ullam esse! Veniam ratione cum sint dignissimos. Quos, labore!";
  const dispatch = useDispatch();
  dispatch(initializeCurrentChat());
  const messages = useSelector((state)=>state.chatReducer.currentChat);
  const currentUser = useSelector((state)=>state.userReducer.demoCurrentUser);

  return (
    <div className={classes.messageContainer}>
      {Object.entries(messages).map((item)=>{
        return item[1].uid === currentUser.uid ? 
        <SenderBubble text= {item[1].message} key={item[0]}/>
        :
        <RecieverBubble text={item[1].message} key={item[0]}/>
        })}
    </div>
  );
};

export default withStyles(styles)(MessageContainer);
