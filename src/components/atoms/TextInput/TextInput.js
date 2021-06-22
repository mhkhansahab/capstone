import TextField from '@material-ui/core/TextField';
import {styles} from './TextInput.style';
import { withStyles } from '@material-ui/styles';


const TextInput = ({classes}) => {
    return ( 
        <div>
            
        <TextField id="outlined-basic" label="Type your message" variant="outlined" size="small"
        className={classes.input} shrink="false"></TextField>

        </div>

     );
}
 
export default withStyles(styles)(TextInput);