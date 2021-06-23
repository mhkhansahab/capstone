import { styles } from './ContactList.style';
import { withStyles } from '@material-ui/styles';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';


const ContactList = ({classes}) => {
    return ( 
        <div className={classes.contactContainer}>
            <ProfileImage/>
            <p>Anonymous</p>

        </div>
     );
}
 
export default withStyles(styles)(ContactList);