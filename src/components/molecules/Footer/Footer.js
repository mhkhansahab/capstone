import TextInput from '../../atoms/TextInput/TextInput';
import SendButton from '../../atoms/SendButton/SendButton';
import { styles } from './Footer.style';
import { withStyles } from '@material-ui/styles';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage , mergeID} from '../../../store/services/chatServices';

const Footer = ({classes}) => {

    const [message, setmessage] = useState({
        textMessage : ""
    })

    const dispatch = useDispatch();
    const sender = useSelector((state)=>state.userReducer.demoCurrentUser);
    const reciever = useSelector((state)=>state.userReducer.demoChatUser); 
    const messageID = mergeID(sender.uid,reciever.uid);
    
    
    const handleChange = (e)=>{
        setmessage({
            textMessage : e.target.value
        })
    }

    const handleSend = ()=>{
        const messageData = {
            ...sender,
            message : message.textMessage
        }
        dispatch(sendMessage(messageID, messageData))
        setmessage({
            textMessage:""
        })
    }

    return ( 
        <div className={classes.footer}>
            <TextInput onChange={(e)=>handleChange(e)} value={message.textMessage}/>
            <SendButton onClick = {()=>handleSend()}/>
        </div>

     );
}
 
export default withStyles(styles)(Footer);