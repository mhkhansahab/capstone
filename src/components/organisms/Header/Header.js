import { styles } from './Header.style';
import { withStyles } from '@material-ui/styles';
import CustomButton from '../../atoms/CustomButton/CustomButton'
// import BackIcon from '../../atoms/BackIcon/BackIcon'



const Header = ({ classes,...props }) => {
    return (
        <div className={classes.headContainer}>
            {props.children}
            <div className={classes.buttonContainer}>
            <CustomButton text="Chats" />
            <CustomButton text="Requests" />

            </div>
                    
        </div>

    );
}

export default withStyles(styles)(Header);