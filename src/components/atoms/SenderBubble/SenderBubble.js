import { styles } from './SenderBubble.style';
import { withStyles } from '@material-ui/styles';

const SenderBubble = ({classes, text}) => {
    return ( 
        <div className={classes.message1}>
            <p>{text}</p>
        </div>
     );
}
 
export default withStyles(styles)(SenderBubble);