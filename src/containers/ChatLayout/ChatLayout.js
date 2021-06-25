import { styles } from './ChatLayout.style';
import { withStyles } from '@material-ui/styles';
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/molecules/Footer/Footer'
import MessageContainer from '../../components/molecules/MessageContainer/MessageContainer';
import BackIcon from '../../components/atoms/BackIcon/BackIcon';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getYourChats } from "./../../store/services/chatServices";
import { getAllUsers } from "./../../store/services/authServices";


const ChatLayout = ({ classes }) => {
    const dispatch = useDispatch();
    const sender = useSelector((state) => state.userReducer.demoCurrentUser);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getYourChats(sender.uid));
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.sideBar}></div>
            <div className={classes.subContainer}>
            <Header><BackIcon className={classes.icon}/></Header>
            <MessageContainer />
            <Footer />
        </div>

        </div>



    );
}

export default withStyles(styles)(ChatLayout);