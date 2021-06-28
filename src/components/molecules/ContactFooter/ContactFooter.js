import { styles } from './ContactFooter.style';
import { withStyles } from '@material-ui/styles';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { setModal } from '../../../store/actions/statusActions';
import { useDispatch } from 'react-redux';

const ContactFooter = ({ classes }) => {

    const dispatch = useDispatch();

    return (
        <div className={classes.footer} onClick={() => dispatch(setModal(true))}>
            <div className={classes.subContainer}>
                <p>Ask A Question</p>
                <NotListedLocationIcon />

            </div>

            <div className={classes.subContainer}>
                <p>Logout</p>
                <ExitToAppIcon />
            </div>
        </div>
    );
}

export default withStyles(styles)(ContactFooter);