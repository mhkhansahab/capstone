import HomeContainer from "../../components/organisms/HomeContainer/HomeContainer";
import { styles } from './HomeScreen.style';
import { withStyles } from '@material-ui/styles';

const HomeScreen = ({ classes }) => {
    return ( 
        <div className={classes.container}>

            <HomeContainer/>




        </div>
     );
}
 
export default withStyles(styles)(HomeScreen);