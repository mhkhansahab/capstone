import { styles } from './RolePage.style';
import { withStyles } from '@material-ui/styles';
import FormContainer from '../../components/organisms/FormContainer/FormContainer'
import Card from '@material-ui/core/Card';


const HomeSubContainer = ({ classes }) => {

    return (
        <div className={classes.container}>
            <div className={classes.background}></div>
            <FormContainer/>
        </div>
    );
}

export default withStyles(styles)(HomeSubContainer);