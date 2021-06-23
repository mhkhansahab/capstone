import Button from '@material-ui/core/Button';
import {styles} from './LoginButton.style';
import { withStyles } from '@material-ui/styles';

const LoginButton = ({classes}) => {
    return ( 
        <Button className={classes.button} variant="contained" color="primary" size="small">
        <SendIcon/>
      </Button>
      
     );
}
 
export default withStyles(styles)(LoginButton);
