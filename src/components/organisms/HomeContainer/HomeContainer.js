import { styles } from './HomeContainer.style';
import { withStyles } from '@material-ui/styles';
import HomeSubContainer from '../../molecules/HomeSubContainer/HomeSubContainer';
import LoginButton from '../../atoms/LoginButton/LoginButton';
import { signIn } from "./../../../store/services/authServices";
import { useDispatch } from "react-redux";

const HomeContainer = ({classes}) => {
    const dispatch = useDispatch();
    return ( 
        <div className={classes.container}>
            <HomeSubContainer/>
            <LoginButton text="Login with Google" onClick={() => dispatch(signIn())}>
            <img class={classes.icon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </LoginButton>
            
        </div>
     );
}
 
export default withStyles(styles)(HomeContainer);