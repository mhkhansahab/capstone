import { styles } from './BackIcon.style';
import { withStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackIcon = ({classes}) => {
    return (
        <div>
            <ArrowBackIcon className={classes.icon} />

        </div>
    );
}

export default withStyles(styles)(BackIcon);