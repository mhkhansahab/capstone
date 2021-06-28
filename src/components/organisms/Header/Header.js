import { styles } from './Header.style';
import { withStyles } from '@material-ui/styles';
import CustomButton from '../../atoms/CustomButton/CustomButton'
// import BackIcon from '../../atoms/BackIcon/BackIcon'



const Header = ({ classes, }) => {
    return (
        <div className={classes.headContainer}>
            <CustomButton text="Chats" />
            <CustomButton text="Requests" />        
        </div>

    );
}

export default withStyles(styles)(Header);