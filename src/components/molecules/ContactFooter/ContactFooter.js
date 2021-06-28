import { styles } from './ContactFooter.style';
import { withStyles } from '@material-ui/styles';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ContactFooter = ({ classes }) => {
    return (
        <div className={classes.footer}>
            <div className={classes.subContainer}>
                <p>Ask A Question</p>
                <NotListedLocationIcon/>

            </div>

            <div className={classes.subContainer}>
                <p>Logout</p>
                <ExitToAppIcon />
            </div>


        </div>
    );
}

export default withStyles(styles)(ContactFooter);