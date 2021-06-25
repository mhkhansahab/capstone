import { styles } from './ChatLayout.style';
import { withStyles } from '@material-ui/styles';
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/molecules/Footer/Footer'
import MessageContainer from '../../components/molecules/MessageContainer/MessageContainer';
import BackIcon from '../../components/atoms/BackIcon/BackIcon';

const ChatLayout = ({ classes }) => {
<<<<<<< HEAD

=======
    const dispatch = useDispatch();
    const sender = useSelector((state) => state.userReducer.demoCurrentUser);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getYourChats(sender.uid));
    }, [])
>>>>>>> bfb9c52273a1363f4fced8304b28cd8b1f71cf84

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