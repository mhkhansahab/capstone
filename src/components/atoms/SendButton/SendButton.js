import Button from '@material-ui/core/Button';
import {styles} from './SendButton.style';
import { withStyles } from '@material-ui/styles';
import SendIcon from '@material-ui/icons/Send';

const SendButton = ({classes}) => {
    return ( 
        <Button className={classes.button} variant="contained" color="primary" size="small">
        <SendIcon/>
      </Button>
      
     );
}
 
export default withStyles(styles)(SendButton);
