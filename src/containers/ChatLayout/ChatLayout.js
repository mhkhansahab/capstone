import { styles } from './ChatLayout.style';
import { withStyles } from '@material-ui/styles';
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/molecules/Footer/Footer'
import MessageContainer from '../../components/molecules/MessageContainer/MessageContainer';
import BackIcon from '../../components/atoms/BackIcon/BackIcon'





const ChatLayout = ({ classes }) => {
    return (
        <div className={classes.container}>
            <Header><BackIcon /></Header>
            <MessageContainer />
            <Footer />
        </div>

    );
}

export default withStyles(styles)(ChatLayout);