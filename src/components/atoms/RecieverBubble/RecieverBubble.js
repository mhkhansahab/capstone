import { styles } from './RecieverBubble.style';
import { withStyles } from '@material-ui/styles';

const RecieverBubble = ({classes, text}) => {
    return ( 
        <div className={classes.reciever}>
            <p>{text}</p>
        </div>
     );
}
 
export default withStyles(styles)(RecieverBubble);