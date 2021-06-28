import { styles } from './CounselorFooter.style';
import { withStyles } from '@material-ui/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const CounselorFooter = ({classes}) => {
    return ( 
        <div className={classes.container}>
                <p>Logout</p>
                <ExitToAppIcon />
        </div>
     );
}
 
export default withStyles(styles)(CounselorFooter);