import { styles } from './Header.style';
import { withStyles } from '@material-ui/styles';
import CustomButton from '../../atoms/CustomButton/CustomButton'
// import BackIcon from '../../atoms/BackIcon/BackIcon'



const Header = ({ classes, }) => {
    return (
        <div className={classes.headContainer}>
<<<<<<< HEAD
            {props.children}
=======
            <CustomButton text="Chats" />
            <CustomButton text="Requests" />        
>>>>>>> 8e86e072a36158e5dbec7cbc063dad83fde7e7f5
        </div>

    );
}

export default withStyles(styles)(Header);