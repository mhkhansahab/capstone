import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { styles } from './DesktopScreen.style';
import { withStyles } from '@material-ui/styles';
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import ContactPage from "../ContactPage/ContactPage";
import ChatLayout from "../ChatLayout/ChatLayout";
import DesktopView from "../DesktopView/DesktopView";
import HomeScreen from "../HomeScreen/HomeScreen";
import RolePage from "../RolePage/RolePage";
import { setFirstLogin, setLogin } from "../../store/actions/statusActions";
import { signOut, getUserAndSetData } from "../../store/services/authServices";
import CircularProgress from "@material-ui/core/CircularProgress";
import firebase from "../../config/firebaseConfig";


const DesktopScreen = ({ classes }) => {
    const dispatch = useDispatch();
    const isLoginFromRedux = useSelector((state) => state.statusReducer.isLogin);
    const isFirstLoginFromRedux = useSelector(
        (state) => state.statusReducer.isFirstLogin
    );
    const user = useSelector((state) => state.userReducer.currentUser);

    useEffect(() => {
        const loginUser = JSON.parse(window.localStorage.getItem("loginUser"));
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setLogin(true));
                getUserAndSetData(loginUser.uid, loginUser, dispatch);
            } else {
                dispatch(setLogin(false));
            }
        });

        if (loginUser) {
            if (!loginUser.role) {
                dispatch(setFirstLogin(true));
            }
        }
    }, []);

    return (
        <div className={classes.container}>
            <Switch>
                {isLoginFromRedux === false ? (
                    <Route path="/">
                        <HomeScreen></HomeScreen>
                    </Route>
                ) : (
                    <>
                        {isFirstLoginFromRedux ? (
                            <Route path="/" exact>
                                <RolePage></RolePage>
                            </Route>
                        ) : (
                            <>
                                {!user ? (
                                    <div className="loader-container">
                                        <div className="loader"><CircularProgress /></div>
                                    </div>
                                ) : (
                                    <>
                                        <DesktopView />
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}
            </Switch>
            <Modal></Modal>


        </div>
    );
}

export default withStyles(styles)(DesktopScreen);




