import { styles } from './Header.style';
import { withStyles } from '@material-ui/styles';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
// import BackIcon from '../../atoms/BackIcon/BackIcon'



const Header = ({classes, ...props}) => {
    return ( 
        <div className={classes.headContainer}>
            {props.children}
            <ProfileImage/>
        </div>

     );
}
 
export default withStyles(styles)(Header);