import MessageBubble from '../../atoms/MessageBubble/MessageBubble'
import { withStyles } from '@material-ui/styles';
import { styles } from './MessageContainer.style';


const MessageContainer = ({classes}) => {
    return ( 
        <div className={classes.messageContainer}>
            <MessageBubble/>
            <MessageBubble/>
            <MessageBubble/>
            <MessageBubble/>
            <MessageBubble/>





        </div>
     );
}
 
export default withStyles(styles)(MessageContainer);