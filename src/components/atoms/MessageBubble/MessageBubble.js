import { styles } from './MessageBubble.style';
import { withStyles } from '@material-ui/styles';

const MessageBubble = ({classes}) => {
    return ( 
        <div>
        <div className={classes.message1}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id dolores delectuconsequatur iste quidem doloremque non natus corrupti veritatis voluptatem, ullam esse! Veniam ratione cum sint dignissimos. Quos, labore!</p>
        </div>
        <div className={classes.message2}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id dolores delectuconsequatur iste quidem doloremque non natus corrupti veritatis voluptatem, ullam esse! Veniam ratione cum sint dignissimos. Quos, labore!</p>
        </div>


        </div>
        
     );
}
 
export default withStyles(styles)(MessageBubble);