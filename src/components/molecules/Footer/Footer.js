import TextInput from '../../atoms/TextInput/TextInput';
import SendButton from '../../atoms/SendButton/SendButton';
import { styles } from './Footer.style';
import { withStyles } from '@material-ui/styles';

const Footer = ({classes}) => {
    return ( 
        <div className={classes.footer}>
            <TextInput/>
            <SendButton/>


        </div>

     );
}
 
export default withStyles(styles)(Footer);