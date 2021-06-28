import { styles } from './CounselorFooter.style';
import { withStyles } from '@material-ui/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {signOut} from "./../../../store/services/authServices";
import { useDispatch } from 'react-redux';

const CounselorFooter = ({classes}) => {
    const dispatch = useDispatch();
    return ( 
        <div className={classes.container} onClick={() => dispatch(signOut())}>
                <p>Logout</p>
                <ExitToAppIcon />
        </div>
     );
}
 
export default withStyles(styles)(CounselorFooter);