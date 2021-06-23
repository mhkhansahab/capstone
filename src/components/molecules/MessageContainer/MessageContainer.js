import SenderBubble from "./../../atoms/SenderBubble/SenderBubble";
import RecieverBubble from "./../../atoms/RecieverBubble/RecieverBubble";
import { withStyles } from "@material-ui/styles";
import { styles } from "./MessageContainer.style";
import { useSelector } from "react-redux";

const MessageContainer = ({ classes }) => {
  const dummy = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id dolores delectuconsequatur iste quidem doloremque non natus corrupti veritatis voluptatem, ullam esse! Veniam ratione cum sint dignissimos. Quos, labore!";
  const chats = useSelector((state)=>state.chatReducer.chats);
  const recieverUser = useSelector((state)=>state.userReducer.demoChatUser);

  console.log(chats);
  
  return (
    <div className={classes.messageContainer}>
      <SenderBubble text= {dummy}/>
      <RecieverBubble text={dummy}/>
    </div>
  );
};

export default withStyles(styles)(MessageContainer);
