import { styles } from './ChatLayout.style';
import { withStyles } from '@material-ui/styles';
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/molecules/Footer/Footer'
import MessageContainer from '../../components/molecules/MessageContainer/MessageContainer';
import BackIcon from '../../components/atoms/BackIcon/BackIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/services/authServices';
import { getYourChats } from "./../../store/services/chatServices";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    isMobile
} from "react-device-detect";


const ChatLayout = ({ classes }) => {
    const dispatch = useDispatch();
    const sender = useSelector((state) => state.userReducer.currentUser);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getYourChats(sender.uid));
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.sideBar}></div>
            <div className={classes.subContainer}>
                {isMobile ?
                    <div className={classes.header}>
                        <Link to="/">
                            <div className={classes.icon}>
                                <BackIcon />
                            </div>
                        </Link>
                    </div> :
                    <div className={classes.header}>

                    </div>
                }

                <MessageContainer />
                <Footer />
            </div>

        </div>



    );
}

export default withStyles(styles)(ChatLayout);