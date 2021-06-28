import { styles } from './ContactFooter.style';
import { withStyles } from '@material-ui/styles';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setModal } from '../../../store/actions/statusActions';
import { useDispatch } from 'react-redux';
import {signOut} from "./../../../store/services/authServices";

const ContactFooter = ({ classes }) => {

    const dispatch = useDispatch();

    return (
        <div className={classes.footer}>
            <div className={classes.subContainer} onClick={() => dispatch(setModal(true))}>
                <p>Ask A Question</p>
                <NotListedLocationIcon />

            </div>
            <div className={classes.subContainer} onClick={() => dispatch(signOut())}>
                <p>Logout</p>
                <ExitToAppIcon />
            </div>
        </div>
    );
}

export default withStyles(styles)(ContactFooter);