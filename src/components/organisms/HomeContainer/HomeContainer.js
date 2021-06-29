import { styles } from './HomeContainer.style';
import { withStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import HomeSubContainer from '../../molecules/HomeSubContainer/HomeSubContainer';
import LoginButton from '../../atoms/LoginButton/LoginButton';
import { signIn } from "./../../../store/services/authServices";
import { useDispatch , useSelector} from "react-redux";

const HomeContainer = ({classes}) => {
    const dispatch = useDispatch();
    const loaderStatus = useSelector((state)=>state.statusReducer.showLoader);

    const loginPressed = ()=>{
        dispatch(signIn());
    }
    return ( 
        <div className={classes.container}>
            <HomeSubContainer/>
            {
                loaderStatus ? <div className="loader"><CircularProgress /></div> 
                :
                <LoginButton text="Login with Google" onClick={() => loginPressed()}>
                    <img class={classes.icon} alt="Google Logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </LoginButton> 
            }
        </div>
     );
}
 
export default withStyles(styles)(HomeContainer);