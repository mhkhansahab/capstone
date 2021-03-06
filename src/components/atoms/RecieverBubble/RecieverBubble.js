import { styles } from './RecieverBubble.style';
import { withStyles } from '@material-ui/styles';

const RecieverBubble = ({classes, text}) => {
    return ( 
        <div className={classes.message2}>
            <p>{text}</p>
        </div>
     );
}
 
export default withStyles(styles)(RecieverBubble);