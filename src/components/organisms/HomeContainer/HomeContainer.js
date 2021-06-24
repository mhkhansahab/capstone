import { styles } from './HomeContainer.style';
import { withStyles } from '@material-ui/styles';
import HomeSubContainer from '../../molecules/HomeSubContainer/HomeSubContainer';
import LoginButton from '../../atoms/LoginButton/LoginButton';

const HomeContainer = ({classes}) => {
    return ( 
        <div className={classes.container}>
            <HomeSubContainer/>
            <LoginButton/>
        </div>
     );
}
 
export default withStyles(styles)(HomeContainer);