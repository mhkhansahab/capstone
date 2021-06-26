import { styles } from './ContactList.style';
import { withStyles } from '@material-ui/styles';


const ContactList = ({classes, name, onClick}) => {
    return ( 
        <div className={classes.contactContainer} onClick={onClick}>
            <div className={classes.titleContainer}>
                <div className={classes.subTitle}>Chat with:</div>
                <div className={classes.title}>{name}</div>
            </div>
            
        </div>
     );
}
 
export default withStyles(styles)(ContactList);