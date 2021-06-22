import Button from '@material-ui/core/Button';
import {styles} from './SendButton.style';
import { withStyles } from '@material-ui/styles';

const SendButton = ({classes}) => {
    return ( 
        <Button className={classes.button} variant="contained" color="primary" size="small">
        Send
      </Button>
      
     );
}
 
export default withStyles(styles)(SendButton);
